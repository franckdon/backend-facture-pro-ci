const prisma = require("../../libs/master"); // ✅ client unique
const axios = require("axios");

exports.certifyInvoice = async (req, res) => {
  const { invoiceUuid } = req.body;
  const societeId = req.user?.societe_id; // ✅ corrigé : societeId → societe_id (cohérent avec le token)

  try {
    if (!invoiceUuid || !societeId) {
      return res.status(400).json({ message: "UUID ou Société manquante." });
    }

    const societe = await prisma.societe.findUnique({
      where: { id: Number(societeId) },
      include: { configuration: true },
    });

    if (!societe) return res.status(404).json({ message: "Société introuvable." });

    // ✅ Plus de getTenantClient — on filtre par societe_id directement
    const facture = await prisma.entete_facture.findFirst({
      where: {
        uuid: invoiceUuid,
        societe_id: societe.id, // 🔑 sécurité : vérifier que la facture appartient bien à cette société
      },
      include: {
        detail_facture: { include: { taxe_details: true } },
        taxe_pieds: true,
        tiers: true,
      },
    });

    if (!facture) return res.status(404).json({ message: "Facture introuvable." });

    let exchangeRate = 1;
    if (facture.code_devise && facture.code_devise.toUpperCase() !== "XOF") {
      const deviseMaster = await prisma.devise.findFirst({
        where: { code_devise: facture.code_devise },
      });
      if (deviseMaster) {
        exchangeRate = parseFloat(deviseMaster.taux_devise);
      }
    }

    const invoiceType =
      facture.code_type_facture.toLowerCase() === "vente" ? "sale" : "purchase";

    const payload = {
      invoiceType,
      paymentMethod: facture.code_mode_paiement.toLowerCase(),
      template: facture.code_type_facturation,
      clientNcc: facture.tiers.ncc_tiers || "0000000X",
      clientCompanyName: facture.tiers.raison_sociale_tiers,
      clientPhone: facture.tiers.telephone_tiers?.replace(/\D/g, "") || "00000000",
      clientEmail: facture.tiers.email_tiers || "",
      pointOfSale: facture.point_vente || "Caisse Principale",
      establishment: facture.etablissement || "Siège Social",
      foreignCurrency: facture.code_devise || "XOF",
      foreignCurrencyRate: exchangeRate,
      items: facture.detail_facture.map((item) => ({
        reference: item.reference_article,
        description: item.designation_article,
        quantity: item.quantite,
        amount: parseFloat(item.prix),
        discount: item.remise,
        measurementUnit: item.unite_vente,
        taxes: invoiceType === "sale" ? [item.code_taux_imposition.split("_")[0]] : [],
        customTaxes: item.taxe_details.map((td) => ({
          name: td.libelle_taxe_details,
          amount: parseFloat(td.taux_taxe_details),
        })),
      })),
      customTaxes: facture.taxe_pieds.map((tp) => ({
        name: tp.libelle_taxe_pieds,
        amount: parseFloat(tp.taux_taxe_pieds),
      })),
      discount: parseFloat(facture.total_remise || 0),
    };

    const isProd = societe.configuration?.production === 1;
    const baseUrl = isProd ? process.env.API_CERTIF_PROD_URL : process.env.API_CERTIF_TEST_URL;
    const tokenFne = societe.configuration?.cle_api_fne;

    const response = await axios.post(
      `${baseUrl}/ws/external/invoices/sign`,
      payload,
      { headers: { Authorization: `Bearer ${tokenFne}`, "Content-Type": "application/json" } }
    );

    const result = response.data;

    // ✅ Une seule transaction sur le client unique
    await prisma.$transaction(async (tx) => {
      await tx.entete_facture.update({
        where: { id: facture.id },
        data: {
          certifie: 1,
          retour_id_facture: String(result.invoice.id),
          retour_token: result.token,
          retour_ncc: result.ncc || "",
          retour_reference: result.reference,
          // ✅ retour_sticker supprimé — champ inexistant dans le schéma
        },
      });

      for (let i = 0; i < facture.detail_facture.length; i++) {
        if (result.invoice.items[i]?.id) {
          await tx.detail_facture.update({
            where: { id: facture.detail_facture[i].id },
            data: { retour_detail: String(result.invoice.items[i].id) },
          });
        }
      }

      // ✅ sticker.upsert intégré dans la transaction — atomique avec la mise à jour facture
      if (result.balance_sticker !== undefined) {
        await tx.sticker.upsert({
          where: { societe_id: societe.id },
          update: { balance_sticker: Number(result.balance_sticker), date_maj: new Date() },
          create: { societe_id: societe.id, balance_sticker: Number(result.balance_sticker) },
        });
      }
    });

    return res.status(200).json({ success: true, reference: result.reference });
  } catch (error) {
    const apiData = error.response?.data;
    let detailMessage = "";

    if (apiData?.errors) {
      detailMessage = Object.values(apiData.errors)
        .map((errObj) => Object.values(errObj).join(", "))
        .join(" | ");
    } else {
      detailMessage = apiData?.message || error.message;
    }

    console.error("Erreur Certification:", JSON.stringify(apiData, null, 2));
    return res.status(500).json({
      error: "Échec API DGI",
      message: apiData?.message || "Erreur de validation",
      details: detailMessage,
    });
  }
};

exports.refundInvoice = async (req, res) => {
  const { invoiceUuid } = req.body;
  const societeId = req.user?.societe_id; // ✅ corrigé : societeId → societe_id

  try {
    if (!invoiceUuid || !societeId) {
      return res.status(400).json({ message: "UUID ou Société manquante." });
    }

    const societe = await prisma.societe.findUnique({
      where: { id: Number(societeId) },
      include: { configuration: true },
    });

    if (!societe) return res.status(404).json({ message: "Société introuvable." });

    const avoir = await prisma.entete_facture.findFirst({
      where: {
        uuid: invoiceUuid,
        societe_id: societe.id, // 🔑 vérification d'appartenance
      },
      include: { detail_facture: true },
    });

    if (!avoir) return res.status(404).json({ message: "Facture d'avoir introuvable." });
    if (!avoir.numero_facture_origine)
      return res.status(400).json({ message: "Lien avec la facture d'origine manquant." });

    const factureOrigine = await prisma.entete_facture.findFirst({
      where: {
        numero_facture: avoir.numero_facture_origine,
        societe_id: societe.id, // 🔑 même société obligatoirement
      },
      include: { detail_facture: true },
    });

    if (!factureOrigine?.retour_id_facture)
      return res.status(400).json({ message: "La facture d'origine n'est pas certifiée auprès de la DGI." });

    const itemsPayload = [];
    for (const itemAvoir of avoir.detail_facture) {
      const correspondance = factureOrigine.detail_facture.find(
        (l) => l.id === itemAvoir.id_detail_origine_facture
      );

      if (!correspondance?.retour_detail) {
        return res.status(400).json({
          message: `L'article ${itemAvoir.reference_article} n'a pas pu être réconcilié avec l'original.`,
        });
      }

      itemsPayload.push({
        id: String(correspondance.retour_detail),
        quantity: Math.abs(Number(itemAvoir.quantite)),
      });
    }

    const isProd = societe.configuration?.production === 1;
    const baseUrl = isProd ? process.env.API_CERTIF_PROD_URL : process.env.API_CERTIF_TEST_URL;
    const tokenFne = societe.configuration?.cle_api_fne;

    const response = await axios.post(
      `${baseUrl}/ws/external/invoices/${factureOrigine.retour_id_facture}/refund`,
      { items: itemsPayload },
      { headers: { Authorization: `Bearer ${tokenFne}`, "Content-Type": "application/json" } }
    );

    const result = response.data;

    await prisma.$transaction(async (tx) => {
      await tx.entete_facture.update({
        where: { id: avoir.id },
        data: {
          certifie: 1,
          retour_id_facture: String(result.invoice.id),
          retour_token: result.token,
          retour_ncc: result.ncc || "",
          retour_reference: result.reference,
          // ✅ retour_sticker supprimé
        },
      });

      for (let i = 0; i < avoir.detail_facture.length; i++) {
        if (result.invoice.items[i]?.id) {
          await tx.detail_facture.update({
            where: { id: avoir.detail_facture[i].id },
            data: { retour_detail: String(result.invoice.items[i].id) },
          });
        }
      }

      // ✅ sticker intégré dans la transaction
      if (result.balance_sticker !== undefined) {
        await tx.sticker.upsert({
          where: { societe_id: societe.id },
          update: { balance_sticker: Number(result.balance_sticker), date_maj: new Date() },
          create: { societe_id: societe.id, balance_sticker: Number(result.balance_sticker) },
        });
      }
    });

    return res.status(201).json({ success: true, reference: result.reference });
  } catch (error) {
    const apiData = error.response?.data;
    console.error("Erreur Refund DGI:", JSON.stringify(apiData, null, 2));
    return res.status(500).json({
      error: "Échec certification Avoir",
      message: apiData?.message || "Erreur de validation DGI",
      details: apiData?.errors ? JSON.stringify(apiData.errors) : error.message,
    });
  }
};