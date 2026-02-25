const masterPrisma = require("../../libs/master");
const { getTenantClient } = require("../../libs/tenant");
const { v4: uuidv4 } = require("uuid");
const XLSX = require("xlsx");
const path = require("path");
const fs = require("fs");

const formatAmount = (amount, deviseCode) => {
  const value = parseFloat(amount);
  if (deviseCode === "XOF") {
    return Math.round(value);
  }
  return parseFloat(value.toFixed(4));
};


exports.importInvoicesFromExcel = async (req, res) => {
  const { code_societe } = req.user;

  try {
    const societe = await masterPrisma.societe.findFirst({
      where: { code_societe },
      include: { configuration: true },
    });

    if (!societe) {
      return res.status(404).json({ error: "Société non identifiée." });
    }
    if (!req.file) {
      return res.status(400).json({
        error: "Aucun fichier Excel fourni. Utilisez le champ 'file' pour l'upload.",
      });
    }

    const workbook = XLSX.readFile(req.file.path);
    const isSingleSheet = !!workbook.Sheets["Import Factures"];
    const isMultiSheet = !!workbook.Sheets["1. Entête Facture"];

    if (!isSingleSheet && !isMultiSheet) {
      return res.status(400).json({
        error:
          "Fichier Excel invalide. Utilisez le modèle officiel (onglet 'Import Factures' ou les 4 onglets séparés).",
      });
    }

    let entetes, lignes, infos, taxes;

    const ENTETE_HEADERS = [
      "numero_facture",
      "date_facture",
      "code_type_facture",
      "code_type_facturation",
      "code_mode_paiement",
      "code_tiers",
      "raison_sociale_tiers",
      "ncc_tiers",
      "telephone_tiers",
      "email_tiers",
      "code_devise",
      "point_vente",
      "remise_pieds_global",
      "numero_facture_origine",
    ];

    const LIGNES_HEADERS = [
      "numero_facture",
      "reference",
      "description",
      "quantite",
      "unit_measure",
      "amount",
      "discount",
      "taxes",
      "customTax_name",
      "customTax_rate",
    ];

    const INFOS_HEADERS = [
      "numero_facture",
      "clientCompanyName",
      "commercialMessage",
      "footer",
    ];

    const TAXES_HEADERS = ["numero_facture", "libelle", "taux"];

    if (isSingleSheet) {
      const sheet = workbook.Sheets["Import Factures"];
      const raw = XLSX.utils.sheet_to_json(sheet, {
        header: 1,
        defval: "",
        blankrows: true,
      });

      const MARKERS = { entete: "01", lignes: "02", infos: "03", taxes: "04" };
      const blockRows = {};
      raw.forEach((row, i) => {
        const a = String(row[0] || "").trim();
        if (a === MARKERS.entete) blockRows.entete = i;
        if (a === MARKERS.lignes) blockRows.lignes = i;
        if (a === MARKERS.infos) blockRows.infos = i;
        if (a === MARKERS.taxes) blockRows.taxes = i;
      });

      if (blockRows.entete === undefined || blockRows.lignes === undefined) {
        return res.status(400).json({
          error: "Fichier invalide : blocs '01' (En-tête) ou '02' (Lignes) introuvables.",
        });
      }

      const DATA_OFFSET = 7;

      function extractBlock(markerRow, headers, colStart, nextMarkerRow) {
        const dataStart = markerRow + DATA_OFFSET;
        const dataEnd = nextMarkerRow !== undefined ? nextMarkerRow - 2 : raw.length - 1;
        const rows = [];
        for (let i = dataStart; i <= dataEnd; i++) {
          const row = raw[i];
          if (!row) continue;
          const obj = {};
          headers.forEach((h, hi) => {
            obj[h] = row[colStart + hi] ?? "";
          });
          const hasData = headers.some((h) => String(obj[h]).trim() !== "");
          if (hasData) rows.push(obj);
        }
        return rows;
      }

      entetes = extractBlock(blockRows.entete, ENTETE_HEADERS, 1, blockRows.lignes);
      lignes = extractBlock(blockRows.lignes, LIGNES_HEADERS, 1, blockRows.infos ?? blockRows.taxes);
      infos = blockRows.infos !== undefined
        ? extractBlock(blockRows.infos, INFOS_HEADERS, 1, blockRows.taxes)
        : [];
      taxes = blockRows.taxes !== undefined
        ? extractBlock(blockRows.taxes, TAXES_HEADERS, 1, undefined)
        : [];
    } else {
      const sheetEntete = workbook.Sheets["1. Entête Facture"];
      const sheetLignes = workbook.Sheets["2. Lignes Facture"];
      const sheetInfos = workbook.Sheets["3. Infos Complémentaires"];
      const sheetTaxes = workbook.Sheets["4. Taxes Pieds"];

      entetes = XLSX.utils.sheet_to_json(sheetEntete, { range: 6, header: ENTETE_HEADERS, defval: "" });
      lignes = XLSX.utils.sheet_to_json(sheetLignes, { range: 7, header: LIGNES_HEADERS, defval: "" });
      infos = sheetInfos
        ? XLSX.utils.sheet_to_json(sheetInfos, { range: 6, header: INFOS_HEADERS, defval: "" })
        : [];
      taxes = sheetTaxes
        ? XLSX.utils.sheet_to_json(sheetTaxes, { range: 7, header: TAXES_HEADERS, defval: "" })
        : [];
    }

    if (entetes.length === 0) {
      return res.status(400).json({ error: "Aucune facture trouvée dans le fichier Excel." });
    }

    const tenantPrisma = getTenantClient(societe);

    // FIX: tauxImpositionMap reste dans le master (model partagé)
    const tauxImpositionMap = await masterPrisma.taux_imposition.findMany();

    const results = { success: [], errors: [], total: entetes.length };

    for (const entete of entetes) {
      try {
        const numeroFacture = entete.numero_facture;
        if (!numeroFacture) continue;

        const lignesFacture = lignes.filter((l) => l.numero_facture === numeroFacture);
        if (lignesFacture.length === 0) {
          results.errors.push({ numero_facture: numeroFacture, error: "Aucune ligne trouvée pour cette facture" });
          continue;
        }

        const infoComp = infos.find((i) => i.numero_facture === numeroFacture) || {};
        const taxesPieds = taxes.filter((t) => t.numero_facture === numeroFacture);

        const codeTiers = entete.code_tiers;
        if (!codeTiers) {
          results.errors.push({ numero_facture: numeroFacture, error: "Code tiers manquant" });
          continue;
        }

        // Recherche ou création du tiers
        let tiersExistant = await tenantPrisma.tiers.findUnique({
          where: { code_tiers: codeTiers },
        });
        const tiersCree = !tiersExistant;
        if (!tiersExistant) {
          tiersExistant = await tenantPrisma.tiers.create({
            data: {
              uuid: uuidv4(),
              code_tiers: codeTiers,
              ncc_tiers: entete.ncc_tiers || "",
              raison_sociale_tiers: entete.raison_sociale_tiers || codeTiers,
              telephone_tiers: entete.telephone_tiers || "",
              email_tiers: entete.email_tiers || "",
            },
          });
        }

        // FIX: Lookup devise par code_devise (string), pas par id
        const codeDevise = String(entete.code_devise || "XOF").trim();
        const devise = await tenantPrisma.devise.findFirst({
          where: { code_devise: codeDevise },
        });
        const deviseCode = devise?.code_devise || "XOF";

        // Codes facture depuis l'Excel (string) — correspond au schéma tenant
        const codeTypeFacture = String(entete.code_type_facture || "").trim();
        const codeTypeFacturation = String(entete.code_type_facturation || "").trim();
        const codeModePaiement = String(entete.code_mode_paiement || "").trim();

        if (!codeTypeFacture || !codeTypeFacturation || !codeModePaiement) {
          results.errors.push({
            numero_facture: numeroFacture,
            error: "Codes type_facture, type_facturation ou mode_paiement manquants",
          });
          continue;
        }

        const items = lignesFacture.map((ligne) => {
          const item = {
            reference: ligne.reference,
            description: ligne.description,
            quantity: parseFloat(ligne.quantite || 0),
            unit_measure: ligne.unit_measure || "U",
            amount: parseFloat(ligne.amount || 0),
            discount: parseFloat(ligne.discount || 0),
            taxes: [ligne.taxes || "TVA"],
            customTaxes: [],
          };
          if (ligne.customTax_name && ligne.customTax_rate) {
            item.customTaxes.push({
              name: ligne.customTax_name,
              rate: parseFloat(ligne.customTax_rate),
            });
          }
          return item;
        });

        const taxesPiedsInput = taxesPieds.map((t) => ({
          libelle: t.libelle,
          taux: parseFloat(t.taux || 0),
        }));

        const remisePiedsPct = parseFloat(entete.remise_pieds_global || 0);

        // ── Calculs ──────────────────────────────────────────────────────────
        let totalHTBrut = 0;
        let totalRemiseLignes = 0;

        const itemsCalculated = items.map((item) => {
          const qte = parseFloat(item.quantity || 0);
          const pu = parseFloat(item.amount || 0);
          const remisePct = parseFloat(item.discount || 0);
          const brutLigne = qte * pu;
          const montantRemiseLigne = brutLigne * (remisePct / 100);
          totalHTBrut += brutLigne;
          totalRemiseLignes += montantRemiseLigne;
          return { ...item, qte, pu, remisePct, brutLigne, montantRemiseLigne };
        });

        const basePourRemisePied = totalHTBrut - totalRemiseLignes;
        const montantRemisePieds = basePourRemisePied * (remisePiedsPct / 100);
        const totalRemiseGlobale = totalRemiseLignes + montantRemisePieds;
        const netHTGlobal = totalHTBrut - totalRemiseGlobale;

        let totalTVAGlobal = 0;
        let totalTaxesSpecifiquesLignes = 0;

        const processedItems = itemsCalculated.map((item) => {
          const tauxEntry = tauxImpositionMap.find((t) => item.taxes.includes(t.code));
          const tauxTVA = tauxEntry?.pourcentage || 18;
          // FIX: utiliser code string au lieu de BigInt id
          const codeTauxImposition = tauxEntry?.code || "TVA";

          const baseHTLigne =
            (item.brutLigne - item.montantRemiseLigne) * (1 - remisePiedsPct / 100);
          const tvaLigne = baseHTLigne * (tauxTVA / 100);
          totalTVAGlobal += tvaLigne;
          const baseTTCpourTaxe = baseHTLigne + tvaLigne;

          // FIX: taxe_details n'a pas de champ uuid — on l'enlève
          const taxesLigne = (item.customTaxes || []).map((ct) => {
            const mt = baseTTCpourTaxe * (parseFloat(ct.rate) / 100);
            totalTaxesSpecifiquesLignes += mt;
            return {
              libelle_taxe_details: ct.name,
              taux_taxe_details: parseFloat(ct.rate),
              montant_taxe_details: formatAmount(mt, deviseCode),
            };
          });

          const ttcLigneBrut =
            baseTTCpourTaxe + taxesLigne.reduce((a, t) => a + parseFloat(t.montant_taxe_details), 0);

          return {
            ...item,
            baseHTLigne: formatAmount(baseHTLigne, deviseCode),
            tvaLigne: formatAmount(tvaLigne, deviseCode),
            taxesLigne,
            codeTauxImposition,
            ttcLigne: formatAmount(ttcLigneBrut, deviseCode),
          };
        });

        const totalTTCBrut = netHTGlobal + totalTVAGlobal;

        // FIX: taxe_pieds n'a pas de champ uuid — on l'enlève
        let totalTaxesPied = 0;
        const taxesPiedsFormatted = taxesPiedsInput.map((tp) => {
          const mt = totalTTCBrut * (parseFloat(tp.taux) / 100);
          totalTaxesPied += mt;
          return {
            libelle_taxe_pieds: tp.libelle,
            taux_taxe_pieds: parseFloat(tp.taux),
            montant_taxe_pieds: formatAmount(mt, deviseCode),
          };
        });

        const totalAutresTaxes = totalTaxesSpecifiquesLignes + totalTaxesPied;
        const netAPayer = totalTTCBrut + totalAutresTaxes;

        // ── Persistance ───────────────────────────────────────────────────────
        const result = await tenantPrisma.$transaction(async (tx) => {
          const info = await tx.information_complementaire.create({
            data: {
              uuid: uuidv4(),
              nom_commercial: infoComp.clientCompanyName || "",
              autre_mention: infoComp.commercialMessage || "",
              pied_de_page: infoComp.footer || "",
            },
          });

          return await tx.entete_facture.create({
            data: {
              uuid: uuidv4(),
              numero_facture: numeroFacture,
              date_facture: entete.date_facture ? new Date(entete.date_facture) : new Date(),

              // FIX: codes string au lieu d'IDs BigInt (correspond au schéma tenant)
              code_type_facture: codeTypeFacture,
              code_type_facturation: codeTypeFacturation,
              code_mode_paiement: codeModePaiement,
              code_devise: deviseCode,

              id_tiers: tiersExistant.id,
              id_information_complementaire: info.id,

              total_ht: formatAmount(totalHTBrut, deviseCode),
              total_tva: formatAmount(totalTVAGlobal, deviseCode),
              total_remise: formatAmount(totalRemiseGlobale, deviseCode),
              total_autre_taxe: formatAmount(totalAutresTaxes, deviseCode),
              total_ttc: formatAmount(netAPayer, deviseCode),

              point_vente: entete.point_vente || "N/A",
              etablissement: "N/A", // non présent dans l'Excel, valeur par défaut

              numero_facture_origine: entete.numero_facture_origine || null,
              certifie: 0,
              retour_ncc: "",
              retour_id_facture: "",
              retour_token: "",
              retour_reference: "",

              detail_facture: {
                create: processedItems.map((item) => ({
                  uuid: uuidv4(),
                  // FIX: code string au lieu de BigInt id
                  code_taux_imposition: item.codeTauxImposition,
                  reference_article: item.reference,
                  designation_article: item.description,
                  quantite: item.qte,
                  unite_vente: item.unit_measure || "U",
                  prix: formatAmount(item.pu, deviseCode),
                  montant_ht: item.baseHTLigne,
                  remise: item.remisePct,
                  montant_remise: formatAmount(item.montantRemiseLigne, deviseCode),
                  montant_taux_imposition: item.tvaLigne,
                  montant_ttc: item.ttcLigne,
                  retour_detail: "",
                  ligne_avoir: 0,
                  id_detail_origine_facture: 0n,
                  // FIX: taxe_details sans uuid
                  taxe_details: { create: item.taxesLigne },
                })),
              },
              // FIX: taxe_pieds sans uuid
              taxe_pieds: { create: taxesPiedsFormatted },
            },
          });
        });

        results.success.push({
          numero_facture: numeroFacture,
          uuid: result.uuid,
          total_ttc: formatAmount(netAPayer, deviseCode),
          code_tiers: codeTiers,
          // FIX: variable correcte pour savoir si le tiers a été créé
          tiers_cree: tiersCree,
        });
      } catch (error) {
        results.errors.push({
          numero_facture: entete.numero_facture || "INCONNU",
          error: error.message,
        });
      }
    }

    fs.unlinkSync(req.file.path);

    return res.status(200).json({
      success: true,
      message: `Import terminé: ${results.success.length} facture(s) créée(s), ${results.errors.length} erreur(s)`,
      results,
    });
  } catch (error) {
    console.error("ERREUR IMPORT EXCEL:", error);
    return res.status(500).json({
      error: "Erreur lors de l'importation du fichier Excel",
      details: error.message,
    });
  }
};

exports.downloadImportTemplate = async (req, res) => {
  try {
    const templatePath = path.join(
      __dirname,
      "../../../templates/MODELE_IMPORT_FACTURES.xlsx",
    );

    if (!fs.existsSync(templatePath)) {
      return res.status(404).json({
        error: "Modèle Excel non trouvé. Veuillez contacter l'administrateur.",
      });
    }

    res.download(templatePath, "MODELE_IMPORT_FACTURES.xlsx", (err) => {
      if (err) {
        console.error("Erreur téléchargement template:", err);
        res
          .status(500)
          .json({ error: "Erreur lors du téléchargement du modèle" });
      }
    });
  } catch (error) {
    console.error("ERREUR TÉLÉCHARGEMENT TEMPLATE:", error);
    res.status(500).json({ error: error.message });
  }
};