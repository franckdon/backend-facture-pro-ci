const prisma = require("../../libs/master");
const { v4: uuidv4 } = require("uuid");

const formatAmount = (amount, deviseCode) => {
  const value = parseFloat(amount) || 0;
  return deviseCode === "XOF" ? Math.round(value) : parseFloat(value.toFixed(4));
};

const serialize = (obj) =>
  JSON.parse(
    JSON.stringify(obj, (key, value) =>
      typeof value === "bigint" ? value.toString() : value
    )
  );

const authenticateSociete = async (req) => {
  const apiKey = req.headers["x-api-key"];
  const isErpMode = !!apiKey;

  // ── Résolution du code_societe selon le mode ──────────────────────────────
  let code_societe;

  if (isErpMode) {
    code_societe = req.body?.code_societe;
    if (!code_societe || typeof code_societe !== "string" || !code_societe.trim()) {
      return { error: "Mode ERP : code_societe manquant dans le body.", status: 400 };
    }
  } else {
    if (!req.user) {
      return { error: "Non authentifié : token JWT manquant ou invalide.", status: 401 };
    }
    code_societe = req.user.code_societe;
    if (!code_societe) {
      return { error: "Token invalide : code_societe absent du JWT.", status: 401 };
    }
  }

  // ── Récupération de la société ────────────────────────────────────────────
  const societe = await prisma.societe.findUnique({
    where: { code_societe: code_societe.trim() },
    include: { configuration: true },
  });

  if (!societe) {
    return { error: "Société non identifiée.", status: 404 };
  }

  // ── Vérification selon le mode ────────────────────────────────────────────
  if (isErpMode) {
    const storedApiKey = societe.configuration?.cle_api_locale;
    if (!storedApiKey || apiKey !== storedApiKey) {
      return { error: "Accès non autorisé : clé API locale invalide.", status: 401 };
    }
  } else {
    // Défense en profondeur : s'assure que la société du JWT n'a pas été altérée
    if (societe.code_societe !== req.user.code_societe) {
      return { error: "Accès non autorisé : société non liée à votre compte.", status: 403 };
    }
  }

  return { societe, isErpMode };
};

// ─────────────────────────────────────────────────────────────────────────────

exports.upsertTiers = async (req, res) => {
  const { tiersData } = req.body;

  try {
    if (!tiersData?.code_tiers) {
      return res.status(400).json({ error: "Données manquantes : code_tiers requis." });
    }

    const auth = await authenticateSociete(req);
    if (auth.error) return res.status(auth.status).json({ error: auth.error });
    const { societe } = auth;

    const tiers = await prisma.tiers.upsert({
      where: {
        societe_id_code_tiers: {
          societe_id: societe.id,
          code_tiers: tiersData.code_tiers,
        },
      },
      update: {
        ncc_tiers: tiersData.ncc_tiers || "",
        raison_sociale_tiers: tiersData.raison_sociale_tiers || "CLIENT DIVERS",
        telephone_tiers: tiersData.telephone_tiers || null,
        email_tiers: tiersData.email_tiers || null,
      },
      create: {
        uuid: uuidv4(),
        societe_id: societe.id,
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
    console.error("Erreur upsertTiers:", error);
    return res.status(500).json({
      error: "Erreur lors de la synchronisation du tiers.",
      message: error.message,
    });
  }
};

exports.storeFullInvoice = async (req, res) => {
  const { invoiceData } = req.body;

  try {
    // ── Validation du payload ─────────────────────────────────────────────
    if (!invoiceData) {
      return res.status(400).json({ error: "invoiceData est requis dans le body." });
    }
    if (!invoiceData.items || invoiceData.items.length === 0) {
      return res.status(400).json({ error: "La facture doit contenir au moins une ligne." });
    }

    // ── Authentification dual-mode ────────────────────────────────────────
    const auth = await authenticateSociete(req);
    if (auth.error) return res.status(auth.status).json({ error: auth.error });
    const { societe } = auth;

    // ── Calculs ───────────────────────────────────────────────────────────
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
      const tvaLigneArrondie = formatAmount(baseHTLigne * (tauxTVA / 100), deviseCode);

      const taxesLigne = (item.customTaxes || []).map((ct) => ({
        libelle_taxe_details: ct.name,
        taux_taxe_details: parseFloat(ct.rate),
        montant_taxe_details: formatAmount(
          (baseHTLigne + tvaLigneArrondie) * (parseFloat(ct.rate) / 100),
          deviseCode
        ),
      }));

      const totalTaxesLigneSomme = taxesLigne.reduce(
        (acc, t) => acc + t.montant_taxe_details,
        0
      );

      return {
        ...item,
        taxCode,
        baseHTLigne: formatAmount(baseHTLigne, deviseCode),
        tvaLigne: tvaLigneArrondie,
        taxesLigne,
        ttcLigne:
          formatAmount(baseHTLigne, deviseCode) + tvaLigneArrondie + totalTaxesLigneSomme,
      };
    });

    const totalTVAFinal = processedItems.reduce((acc, item) => acc + item.tvaLigne, 0);
    const totalAutresTaxesFinal =
      processedItems.reduce(
        (acc, i) =>
          acc + i.taxesLigne.reduce((s, t) => s + t.montant_taxe_details, 0),
        0
      ) +
      (invoiceData.taxesPieds || []).reduce(
        (acc, tp) =>
          acc +
          formatAmount(
            (netHTGlobal + totalTVAFinal) * (parseFloat(tp.taux) / 100),
            deviseCode
          ),
        0
      );

    const codeTiers = invoiceData.code_tiers?.trim();
    if (!codeTiers) {
      return res.status(400).json({ error: "code_tiers est requis pour créer ou identifier le tiers." });
    }

    const tiers = await prisma.tiers.upsert({
      where: {
        societe_id_code_tiers: {
          societe_id: societe.id,
          code_tiers: codeTiers,
        },
      },
      update: {
        raison_sociale_tiers: invoiceData.raison_sociale_tiers ?? undefined,
        ncc_tiers: invoiceData.ncc_tiers ?? undefined,
        telephone_tiers: invoiceData.telephone_tiers || null,
        email_tiers: invoiceData.email_tiers || null,
      },
      create: {
        uuid: uuidv4(),
        societe_id: societe.id,
        code_tiers: codeTiers,
        raison_sociale_tiers: invoiceData.raison_sociale_tiers,
        ncc_tiers: invoiceData.ncc_tiers,
        telephone_tiers: invoiceData.telephone_tiers || null,
        email_tiers: invoiceData.email_tiers || null,
      },
    });

    // ── Transaction Prisma ────────────────────────────────────────────────
    const result = await prisma.$transaction(async (tx) => {
      const info = await tx.information_complementaire.create({
        data: {
          societe_id: societe.id,
          nom_commercial: invoiceData.clientCompanyName || "",
          autre_mention: invoiceData.commercialMessage || "",
          pied_de_page: invoiceData.footer || "",
        },
      });

      return await tx.entete_facture.create({
        data: {
          societe_id: societe.id,
          numero_facture: invoiceData.numero_facture || `FAC-${Date.now()}`,
          date_facture: new Date(),
          code_type_facture: invoiceData.code_type_facture || "VENTE",
          code_type_facturation: invoiceData.code_type_facturation || "STANDARD",
          code_mode_paiement: invoiceData.code_mode_paiement || "ESPECE",
          code_devise: deviseCode,
          id_tiers: tiers.id, 
          id_information_complementaire: info.id,
          total_ht: formatAmount(totalHTBrut, deviseCode),
          total_tva: totalTVAFinal,
          total_remise: formatAmount(totalRemiseGlobale, deviseCode),
          total_autre_taxe: totalAutresTaxesFinal,
          total_ttc:
            formatAmount(netHTGlobal, deviseCode) + totalTVAFinal + totalAutresTaxesFinal,
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
                deviseCode
              ),
            })),
          },
        },
      });
    });

    res.status(201).json(serialize({ success: true, uuid: result.uuid }));
  } catch (error) {
    console.error("ERREUR storeFullInvoice:", error);
    res.status(500).json({ error: error.message });
  }
};

exports.storeRefundInvoice = async (req, res) => {
  const apiKeyClient = req.headers["x-api-key"] || req.body.cle_api_locale;
  const { code_societe, invoiceData } = req.body;

  try {
    const auth = await authenticateSociete(code_societe, apiKeyClient);
    if (auth.error) return res.status(auth.status).json({ error: auth.error });
    const { societe } = auth;

    const factureOrigine = await prisma.entete_facture.findFirst({
      where: {
        numero_facture: invoiceData.numero_facture_origine,
        societe_id: societe.id, 
      },
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

    const processedItems = invoiceData.items.map((itemAvoir) => {
      const ligneOrigine = factureOrigine.detail_facture.find(
        (ld) => ld.reference_article === itemAvoir.reference_article,
      );
      if (!ligneOrigine) throw new Error(`Ligne ${itemAvoir.reference_article} absente.`);

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
        montant_taxe_details: formatAmount(parseFloat(taxe.montant_taxe_details) * ratio, deviseCode),
      }));

      const ttcLigneBrut =
        htNetLigne + tvaLigne + taxesLigneAvoir.reduce((acc, t) => acc + t.montant_taxe_details, 0);

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

    const totalRemiseAvoir = totalRemiseLignes + (totalHTBrut - totalRemiseLignes) * (remisePiedsPctOrigine / 100);
    const totalHTNetAvoir = totalHTBrut - totalRemiseAvoir;
    const totalTTCBrutAvoir = totalHTNetAvoir + totalTVAAvoir;

    const taxesPiedsAvoir = (factureOrigine.taxe_pieds || []).map((tp) => ({
      libelle_taxe_pieds: tp.libelle_taxe_pieds,
      taux_taxe_pieds: parseFloat(tp.taux_taxe_pieds),
      montant_taxe_pieds: formatAmount(totalTTCBrutAvoir * (parseFloat(tp.taux_taxe_pieds) / 100), deviseCode),
    }));

    const totalAutreTaxeAvoir =
      processedItems.reduce((acc, i) => acc + i.taxes.reduce((s, t) => s + t.montant_taxe_details, 0), 0) +
      taxesPiedsAvoir.reduce((acc, t) => acc + t.montant_taxe_pieds, 0);

    const result = await prisma.$transaction(async (tx) => {
      let infoId = null;
      if (factureOrigine.information_complementaire) {
        const newInfo = await tx.information_complementaire.create({
          data: {
            societe_id: societe.id, // 🔑
            nom_commercial: factureOrigine.information_complementaire.nom_commercial,
            autre_mention: "AVOIR SUR " + factureOrigine.numero_facture,
            pied_de_page: factureOrigine.information_complementaire.pied_de_page,
          },
        });
        infoId = newInfo.id;
      }

      return await tx.entete_facture.create({
        data: {
          societe_id: societe.id, 
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
          total_ttc: formatAmount(totalTTCBrutAvoir + totalAutreTaxeAvoir, deviseCode),
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
    const auth = await authenticateSociete(code_societe, apiKeyClient);
    if (auth.error) return res.status(auth.status).json({ error: auth.error });
    const { societe } = auth;

    const facture = await prisma.entete_facture.findFirst({
      where: {
        numero_facture,
        societe_id: societe.id, // 🔑
      },
      select: { id: true, certifie: true, id_information_complementaire: true },
    });

    if (!facture) return res.status(404).json({ error: "Facture introuvable." });

    if (facture.certifie === 1) {
      return res.status(403).json({
        error: "ACTION REFUSÉE : Cette facture est déjà certifiée par la DGI. Vous devez émettre une facture d'avoir pour l'annuler.",
      });
    }
    await prisma.$transaction(async (tx) => {
      await tx.entete_facture.delete({ where: { id: facture.id } });

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
    res.status(500).json({ error: "Erreur lors de la suppression de la facture." });
  }
};

exports.getCertifiedInvoices = async (req, res) => {
  const apiKeyClient = req.headers["x-api-key"] || req.body.cle_api_locale;
  const { code_societe } = req.query;

  try {
    const auth = await authenticateSociete(code_societe, apiKeyClient);
    if (auth.error) return res.status(auth.status).json({ error: auth.error });
    const { societe } = auth;

    const factures = await prisma.entete_facture.findMany({
      where: {
        certifie: 1,
        societe_id: societe.id, // 🔑
      },
      include: {
        tiers: true,
        information_complementaire: true,
        detail_facture: {
          include: { taxe_details: true },
          orderBy: { id: "asc" },
        },
        taxe_pieds: true,
      },
      orderBy: { date_facture: "desc" },
    });

    const stats = {
      total_factures: factures.length,
      somme_ttc: factures.reduce((acc, f) => acc + Number(f.total_ttc), 0).toFixed(4),
    };

    return res.status(200).json(serialize({
      success: true,
      statistiques: stats,
      factures,
    }));
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur", details: error.message });
  }
};