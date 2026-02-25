const masterPrisma = require("../../libs/master");
const { getTenantClient } = require("../../libs/tenant");
const { v4: uuidv4 } = require("uuid");

const formatAmount = (amount, deviseCode) => {
  const value = parseFloat(amount) || 0;
  return deviseCode === "XOF" ? Math.round(value) : parseFloat(value.toFixed(4));
};

const formatAmountDisplay = (amount, deviseCode) => {
  const value = parseFloat(amount) || 0;
  return deviseCode === "XOF" ? Math.round(value).toString() : value.toFixed(4);
};

exports.upsertTiers = async (req, res) => {
  const apiKeyClient = req.headers["x-api-key"] || req.body.cle_api_locale;
  const { code_societe, tiersData } = req.body;

  try {
    if (!code_societe || !tiersData?.code_tiers) {
      return res
        .status(400)
        .json({ error: "Données manquantes (code_societe ou code_tiers)." });
    }

    const societe = await masterPrisma.societe.findUnique({
      where: { code_societe },
      include: { configuration: true },
    });

    if (!societe)
      return res.status(404).json({ error: "Société non identifiée." });

    const storedApiKey = societe.configuration?.cle_api_locale;
    if (!storedApiKey || apiKeyClient !== storedApiKey) {
      return res
        .status(401)
        .json({ error: "Accès non autorisé : Clé API locale invalide." });
    }

    const tenantPrisma = getTenantClient(societe);

    const tiers = await tenantPrisma.tiers.upsert({
      where: { code_tiers: tiersData.code_tiers },
      update: {
        ncc_tiers: tiersData.ncc_tiers || "",
        raison_sociale_tiers: tiersData.raison_sociale_tiers || "CLIENT DIVERS",
        telephone_tiers: tiersData.telephone_tiers || null,
        email_tiers: tiersData.email_tiers || null,
      },
      create: {
        uuid: uuidv4(),
        code_tiers: tiersData.code_tiers,
        ncc_tiers: tiersData.ncc_tiers || "",
        raison_sociale_tiers: tiersData.raison_sociale_tiers || "CLIENT DIVERS",
        telephone_tiers: tiersData.telephone_tiers || null,
        email_tiers: tiersData.email_tiers || null,
      },
    });

    return res.status(200).json({
      success: true,
      tiersId: tiers.id.toString(),
      uuid: tiers.uuid,
    });
  } catch (error) {
    console.error("Erreur Upsert Tiers:", error);
    return res.status(500).json({
      error: "Erreur lors de la synchronisation du tiers.",
      message: error.message,
    });
  }
};

exports.storeFullInvoice = async (req, res) => {
  const apiKeyClient = req.headers["x-api-key"] || req.body.cle_api_locale;
  const { code_societe, invoiceData } = req.body;

  try {
    const societe = await masterPrisma.societe.findUnique({
      where: { code_societe },
      include: { configuration: true },
    });
    if (!societe)
      return res.status(404).json({ error: "Société non identifiée." });

    const storedApiKey = societe.configuration?.cle_api_locale;
    if (!storedApiKey || apiKeyClient !== storedApiKey) {
      return res.status(401).json({ error: "Accès non autorisé." });
    }

    const tenantPrisma = getTenantClient(societe);

    const deviseCode = invoiceData.code_devise || "XOF";

    let totalHTBrut = 0;
    let totalRemiseLignes = 0;
    const itemsCalculated = invoiceData.items.map((item) => {
      const qte = parseFloat(item.quantity || 0);
      const pu = parseFloat(item.amount || 0);
      const remisePct = parseFloat(item.discount || 0);
      const brutLigne = qte * pu;
      const montantRemiseLigne = brutLigne * (remisePct / 100);
      totalHTBrut += brutLigne;
      totalRemiseLignes += montantRemiseLigne;
      return { ...item, qte, pu, remisePct, brutLigne, montantRemiseLigne };
    });

    const remisePiedsPct = parseFloat(invoiceData.remise_pieds_global || 0);
    const basePourRemisePied = totalHTBrut - totalRemiseLignes;
    const montantRemisePieds = basePourRemisePied * (remisePiedsPct / 100);
    const totalRemiseGlobale = totalRemiseLignes + montantRemisePieds;
    const netHTGlobal = totalHTBrut - totalRemiseGlobale;

    const processedItems = itemsCalculated.map((item) => {
      const taxCode = item.taxes[0] || "TVA_18";
      const tauxTVA = parseFloat(taxCode.split("_")[1]) || 18;

      const baseHTLigne =
        (item.brutLigne - item.montantRemiseLigne) * (1 - remisePiedsPct / 100);
      const tvaLigneArrondie = formatAmount(
        baseHTLigne * (tauxTVA / 100),
        deviseCode,
      );

      const taxesLigne = (item.customTaxes || []).map((ct) => ({
        libelle_taxe_details: ct.name,
        taux_taxe_details: parseFloat(ct.rate),
        montant_taxe_details: formatAmount(
          (baseHTLigne + tvaLigneArrondie) * (parseFloat(ct.rate) / 100),
          deviseCode,
        ),
      }));

      const totalTaxesLigneSomme = taxesLigne.reduce(
        (acc, t) => acc + t.montant_taxe_details,
        0,
      );

      return {
        ...item,
        taxCode,
        baseHTLigne: formatAmount(baseHTLigne, deviseCode),
        tvaLigne: tvaLigneArrondie,
        taxesLigne,
        ttcLigne:
          formatAmount(baseHTLigne, deviseCode) +
          tvaLigneArrondie +
          totalTaxesLigneSomme,
      };
    });

    const totalTVAFinal = processedItems.reduce(
      (acc, item) => acc + item.tvaLigne,
      0,
    );
    const totalAutresTaxesFinal =
      processedItems.reduce(
        (acc, i) =>
          acc + i.taxesLigne.reduce((s, t) => s + t.montant_taxe_details, 0),
        0,
      ) +
      (invoiceData.taxesPieds || []).reduce(
        (acc, tp) =>
          acc +
          formatAmount(
            (netHTGlobal + totalTVAFinal) * (parseFloat(tp.taux) / 100),
            deviseCode,
          ),
        0,
      );

    const result = await tenantPrisma.$transaction(async (tx) => {
      const info = await tx.information_complementaire.create({
        data: {
          nom_commercial: invoiceData.clientCompanyName || "",
          autre_mention: invoiceData.commercialMessage || "",
          pied_de_page: invoiceData.footer || "",
        },
      });

      return await tx.entete_facture.create({
        data: {
          numero_facture: invoiceData.numero_facture || `FAC-${Date.now()}`,
          date_facture: new Date(),
          code_type_facture: invoiceData.code_type_facture || "VENTE",
          code_type_facturation:
            invoiceData.code_type_facturation || "STANDARD",
          code_mode_paiement: invoiceData.code_mode_paiement || "ESPECE",
          code_devise: deviseCode,

          id_tiers: BigInt(invoiceData.id_tiers || 1),
          id_information_complementaire: info.id,

          total_ht: formatAmount(totalHTBrut, deviseCode),
          total_tva: totalTVAFinal,
          total_remise: formatAmount(totalRemiseGlobale, deviseCode),
          total_autre_taxe: totalAutresTaxesFinal,
          total_ttc:
            formatAmount(netHTGlobal, deviseCode) +
            totalTVAFinal +
            totalAutresTaxesFinal,

          point_vente: invoiceData.pointOfSale || "Caisse 1",
          etablissement: invoiceData.establishment || "Siège",

          detail_facture: {
            create: processedItems.map((item) => ({
              reference_article: item.reference,
              designation_article: item.description,
              quantite: item.qte,
              unite_vente: item.unit_measure || "U",
              prix: formatAmount(item.pu, deviseCode),
              montant_ht: item.baseHTLigne,
              remise: item.remisePct,
              montant_remise: formatAmount(item.montantRemiseLigne, deviseCode),
              code_taux_imposition: item.taxCode,
              montant_taux_imposition: item.tvaLigne,
              montant_ttc: item.ttcLigne,
              retour_detail: "",
              ligne_avoir: 0,
              id_detail_origine_facture: 0n,
              taxe_details: { create: item.taxesLigne },
            })),
          },
          taxe_pieds: {
            create: (invoiceData.taxesPieds || []).map((tp) => ({
              libelle_taxe_pieds: tp.libelle,
              taux_taxe_pieds: parseFloat(tp.taux),
              montant_taxe_pieds: formatAmount(
                (netHTGlobal + totalTVAFinal) * (parseFloat(tp.taux) / 100),
                deviseCode,
              ),
            })),
          },
        },
      });
    });

    res.status(201).json({ success: true, uuid: result.uuid });
  } catch (error) {
    console.error("ERREUR:", error);
    res.status(500).json({ error: error.message });
  }
};

exports.storeRefundInvoice = async (req, res) => {
  const apiKeyClient = req.headers["x-api-key"] || req.body.cle_api_locale;
  const { code_societe, invoiceData } = req.body;

  try {
    const societe = await masterPrisma.societe.findUnique({
      where: { code_societe },
      include: { configuration: true },
    });
    if (!societe)
      return res.status(404).json({ error: "Société non identifiée." });

    const storedApiKey = societe.configuration?.cle_api_locale;
    if (!storedApiKey || apiKeyClient !== storedApiKey) {
      return res.status(401).json({ error: "Accès non autorisé." });
    }

    const tenantPrisma = getTenantClient(societe);

    const factureOrigine = await tenantPrisma.entete_facture.findFirst({
      where: { numero_facture: invoiceData.numero_facture_origine },
      include: {
        detail_facture: { include: { taxe_details: true } },
        information_complementaire: true,
        taxe_pieds: true,
      },
    });

    if (!factureOrigine)
      return res.status(400).json({ error: "Facture d'origine introuvable." });

    const deviseCode = factureOrigine.code_devise || "XOF";

    const remisePiedsPctOrigine = 0;

    let totalHTBrut = 0;
    let totalTVAAvoir = 0;
    let totalRemiseLignes = 0;
    let totalTTCAvoir = 0;

    const processedItems = invoiceData.items.map((itemAvoir) => {
      const ligneOrigine = factureOrigine.detail_facture.find(
        (ld) => ld.reference_article === itemAvoir.reference_article,
      );

      if (!ligneOrigine)
        throw new Error(`Ligne ${itemAvoir.reference_article} absente.`);

      const qteRetournee = parseFloat(itemAvoir.quantite);
      const qteInitiale = parseFloat(ligneOrigine.quantite);
      const ratio = qteRetournee / qteInitiale;

      const htBrutLigne = qteRetournee * parseFloat(ligneOrigine.prix);
      const htNetLigne = parseFloat(ligneOrigine.montant_ht) * ratio;
      const tvaLigne = parseFloat(ligneOrigine.montant_taux_imposition) * ratio;
      const remiseLigne = parseFloat(ligneOrigine.montant_remise || 0) * ratio;

      totalHTBrut += htBrutLigne;
      totalTVAAvoir += tvaLigne;
      totalRemiseLignes += remiseLigne;

      const taxesLigneAvoir = (ligneOrigine.taxe_details || []).map((taxe) => ({
        libelle_taxe_details: taxe.libelle_taxe_details,
        taux_taxe_details: parseFloat(taxe.taux_taxe_details),
        montant_taxe_details: formatAmount(
          parseFloat(taxe.montant_taxe_details) * ratio,
          deviseCode,
        ),
      }));

      const ttcLigneBrut =
        htNetLigne +
        tvaLigne +
        taxesLigneAvoir.reduce((acc, t) => acc + t.montant_taxe_details, 0);

      return {
        ...itemAvoir,
        ligne: ligneOrigine,
        qte: qteRetournee,
        ht: htNetLigne,
        tva: tvaLigne,
        remise: remiseLigne,
        ttc: ttcLigneBrut,
        taxes: taxesLigneAvoir,
      };
    });

    const totalRemiseAvoir =
      totalRemiseLignes +
      (totalHTBrut - totalRemiseLignes) * (remisePiedsPctOrigine / 100);
    const totalHTNetAvoir = totalHTBrut - totalRemiseAvoir;
    const totalTTCBrutAvoir = totalHTNetAvoir + totalTVAAvoir;

    const taxesPiedsAvoir = (factureOrigine.taxe_pieds || []).map((tp) => ({
      libelle_taxe_pieds: tp.libelle_taxe_pieds,
      taux_taxe_pieds: parseFloat(tp.taux_taxe_pieds),
      montant_taxe_pieds: formatAmount(
        totalTTCBrutAvoir * (parseFloat(tp.taux_taxe_pieds) / 100),
        deviseCode,
      ),
    }));

    const totalAutreTaxeAvoir =
      processedItems.reduce(
        (acc, i) =>
          acc + i.taxes.reduce((s, t) => s + t.montant_taxe_details, 0),
        0,
      ) + taxesPiedsAvoir.reduce((acc, t) => acc + t.montant_taxe_pieds, 0);

    const result = await tenantPrisma.$transaction(async (tx) => {
      let infoId = null;
      if (factureOrigine.information_complementaire) {
        const newInfo = await tx.information_complementaire.create({
          data: {
            nom_commercial:
              factureOrigine.information_complementaire.nom_commercial,
            autre_mention: "AVOIR SUR " + factureOrigine.numero_facture,
            pied_de_page:
              factureOrigine.information_complementaire.pied_de_page,
          },
        });
        infoId = newInfo.id;
      }

      return await tx.entete_facture.create({
        data: {
          numero_facture: invoiceData.numero_facture,
          date_facture: new Date(),
          numero_facture_origine: factureOrigine.numero_facture,
          code_type_facture: "AVOIR",
          code_type_facturation: factureOrigine.code_type_facturation,
          code_mode_paiement: factureOrigine.code_mode_paiement,
          code_devise: deviseCode,
          id_tiers: factureOrigine.id_tiers,
          id_information_complementaire: infoId,
          point_vente: factureOrigine.point_vente,
          etablissement: factureOrigine.etablissement,
          total_ht: formatAmount(totalHTBrut, deviseCode),
          total_tva: formatAmount(totalTVAAvoir, deviseCode),
          total_remise: formatAmount(totalRemiseAvoir, deviseCode),
          total_autre_taxe: formatAmount(totalAutreTaxeAvoir, deviseCode),
          total_ttc: formatAmount(
            totalTTCBrutAvoir + totalAutreTaxeAvoir,
            deviseCode,
          ),
          certifie: 0,
          detail_facture: {
            create: processedItems.map((item) => ({
              reference_article: item.ligne.reference_article,
              designation_article: item.ligne.designation_article,
              quantite: item.qte,
              unite_vente: item.ligne.unite_vente,
              prix: formatAmount(parseFloat(item.ligne.prix), deviseCode),
              montant_ht: formatAmount(item.ht, deviseCode),
              remise: parseFloat(item.ligne.remise),
              montant_remise: formatAmount(item.remise, deviseCode),
              code_taux_imposition: item.ligne.code_taux_imposition,
              montant_taux_imposition: formatAmount(item.tva, deviseCode),
              montant_ttc: formatAmount(item.ttc, deviseCode),
              id_detail_origine_facture: item.ligne.id,
              ligne_avoir: 1,
              taxe_details: { create: item.taxes },
            })),
          },
          taxe_pieds: { create: taxesPiedsAvoir },
        },
      });
    });

    res.status(201).json({ success: true, uuid: result.uuid });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

exports.deleteInvoice = async (req, res) => {
  const apiKeyClient = req.headers["x-api-key"] || req.body.cle_api_locale;

  const { code_societe, numero_facture } = req.body;

  try {
    const societe = await masterPrisma.societe.findUnique({
      where: { code_societe },
      include: { configuration: true },
    });
    if (!societe)
      return res.status(404).json({ error: "Société non identifiée." });
    const storedApiKey = societe.configuration?.cle_api_locale;

    if (!storedApiKey || apiKeyClient !== storedApiKey) {
      return res.status(401).json({
        error: "Accès non autorisé : Clé API locale invalide ou manquante.",
      });
    }

    const tenantPrisma = getTenantClient(societe);

    const facture = await tenantPrisma.entete_facture.findFirst({
      where: { numero_facture: numero_facture },
      select: {
        id: true,
        certifie: true,
        id_information_complementaire: true,
      },
    });

    if (!facture) {
      return res.status(404).json({ error: "Facture introuvable." });
    }

    if (facture.certifie === 1) {
      return res.status(403).json({
        error:
          "ACTION REFUSÉE : Cette facture est déjà certifiée par la DGI. Vous devez émettre une facture d'avoir pour l'annuler.",
      });
    }

    exports.deleteInvoice = async (req, res) => {
      const apiKeyClient = req.headers["x-api-key"] || req.body.cle_api_locale;

      const { code_societe, numero_facture } = req.body;

      try {
        const societe = await masterPrisma.societe.findUnique({
          where: { code_societe },
          include: { configuration: true },
        });
        if (!societe)
          return res.status(404).json({ error: "Société non identifiée." });
        const storedApiKey = societe.configuration?.cle_api_locale;

        if (!storedApiKey || apiKeyClient !== storedApiKey) {
          return res.status(401).json({
            error: "Accès non autorisé : Clé API locale invalide ou manquante.",
          });
        }

        const tenantPrisma = getTenantClient(societe);

        const facture = await tenantPrisma.entete_facture.findFirst({
          where: { numero_facture: numero_facture },
          select: {
            id: true,
            certifie: true,
            id_information_complementaire: true,
          },
        });

        if (!facture) {
          return res.status(404).json({ error: "Facture introuvable." });
        }

        if (facture.certifie === 1) {
          return res.status(403).json({
            error:
              "ACTION REFUSÉE : Cette facture est déjà certifiée par la DGI. Vous devez émettre une facture d'avoir pour l'annuler.",
          });
        }

        await tenantPrisma.$transaction(async (tx) => {
          await tx.entete_facture.delete({
            where: { id: facture.id },
          });

          if (facture.id_information_complementaire) {
            await tx.information_complementaire.delete({
              where: { id: facture.id_information_complementaire },
            });
          }
        });

        return res.status(200).json({
          success: true,
          message: `La facture ${numero_facture} et ses dépendances ont été supprimées avec succès.`,
        });
      } catch (error) {
        console.error("Erreur Suppression:", error);
        res
          .status(500)
          .json({ error: "Erreur lors de la suppression de la facture." });
      }
    };

    return res.status(200).json({
      success: true,
      message: `La facture ${numero_facture} et ses dépendances ont été supprimées avec succès.`,
    });
  } catch (error) {
    console.error("Erreur Suppression:", error);
    res
      .status(500)
      .json({ error: "Erreur lors de la suppression de la facture." });
  }
};

exports.getCertifiedInvoices = async (req, res) => {
  const apiKeyClient = req.headers["x-api-key"] || req.body.cle_api_locale;
  const { code_societe } = req.query;

  try {
    // 1. Authentification via le Master
    const societe = await masterPrisma.societe.findUnique({
      where: { code_societe },
      include: { configuration: true },
    });

    if (!societe || societe.configuration?.cle_api_locale !== apiKeyClient) {
      return res.status(401).json({ error: "Authentification Master échouée." });
    }

    // 2. Connexion au Tenant spécifique
    const tenantPrisma = getTenantClient(societe);

    // 3. Récupération avec les relations mises à jour
    const factures = await tenantPrisma.entete_facture.findMany({
      where: { certifie: 1 },
      include: {
        tiers: true,
        information_complementaire: true,
        detail_facture: {
          include: { taxe_details: true },
          orderBy: { id: "asc" }
        },
        taxe_pieds: true,
      },
      orderBy: { date_facture: "desc" },
    });

    // 4. Calcul des statistiques rapides
    const stats = {
      total_factures: factures.length,
      somme_ttc: factures.reduce((acc, f) => acc + Number(f.total_ttc), 0).toFixed(4),
    };

    return res.status(200).json(serialize({
      success: true,
      statistiques: stats,
      factures: factures // Les codes (devise, type, etc.) sont déjà dans l'objet
    }));

  } catch (error) {
    res.status(500).json({ error: "Erreur serveur", details: error.message });
  }
};
