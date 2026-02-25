const puppeteer = require("puppeteer");
const path = require("path");
const fs = require("fs");
const QRCode = require("qrcode");
const pathConfig = require("./pathConfig");

const formatMontant = (montant, codeDevise = "XOF") => {
  if (!montant && montant !== 0) return "0";
  const isXof = codeDevise === "XOF";
  return new Intl.NumberFormat("fr-FR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: isXof ? 0 : 2,
  }).format(montant);
};

const formatDate = (date) => {
  if (!date) return "";
  return new Date(date).toLocaleString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
};

/**
 * @param {object} facture  - Entité entete_facture avec ses relations (tiers, detail_facture, taxe_pieds, information_complementaire)
 * @param {object} societe  - Entité societe depuis le master
 * @param {object} [deviseInfo] - Optionnel : { code_devise, taux_devise } récupéré depuis le master
 *                                Nécessaire uniquement si code_devise !== "XOF" pour l'affichage en devises étrangères
 */
exports.generateInvoicePdfPuppeteer = async (facture, societe, deviseInfo = null) => {
  const templatePath = path.join(__dirname, "invoice.template.html");
  let html = fs.readFileSync(templatePath, "utf8");

  // ── QR Code ────────────────────────────────────────────────────────────────
  const qrCode = facture.retour_token
    ? await QRCode.toDataURL(facture.retour_token)
    : null;

  // ── Utilitaire image → base64 ───────────────────────────────────────────────
  const imageToBase64 = (imagePath, debugLabel = "") => {
    try {
      const absolutePath = path.isAbsolute(imagePath)
        ? imagePath
        : path.join(__dirname, imagePath);

      if (!fs.existsSync(absolutePath)) {
        console.warn(`[${debugLabel}] Image introuvable: ${absolutePath}`);
        return null;
      }

      const imageBuffer = fs.readFileSync(absolutePath);
      const ext = path.extname(absolutePath).toLowerCase();

      let mimeType = "image/png";
      if (ext === ".jpg" || ext === ".jpeg") mimeType = "image/jpeg";
      else if (ext === ".svg") mimeType = "image/svg+xml";
      else if (ext === ".gif") mimeType = "image/gif";

      return `data:${mimeType};base64,${imageBuffer.toString("base64")}`;
    } catch (error) {
      console.error(`[${debugLabel}] Erreur conversion: ${error.message}`);
      return null;
    }
  };

  // ── Logo société ────────────────────────────────────────────────────────────
  let companyLogoSrc = null;
  if (societe.logo_url) {
    if (societe.logo_url.startsWith("data:image")) {
      companyLogoSrc = societe.logo_url;
    } else if (
      societe.logo_url.startsWith("http://") ||
      societe.logo_url.startsWith("https://")
    ) {
      companyLogoSrc = societe.logo_url;
    } else {
      const logoPath = path.join(__dirname, pathConfig.uploadsBasePath, societe.logo_url);
      companyLogoSrc = imageToBase64(logoPath, "LOGO SOCIÉTÉ");
    }
  }
  const companyLogo = companyLogoSrc
    ? `<img src="${companyLogoSrc}" alt="Logo société" />`
    : "";

  // ── Logo DGI ────────────────────────────────────────────────────────────────
  const dgiLogoPath = path.join(__dirname, pathConfig.dgiLogoPath);
  const dgiLogoSrc = imageToBase64(dgiLogoPath, "LOGO DGI");
  const dgiLogo = dgiLogoSrc ? `<img src="${dgiLogoSrc}" alt="Logo DGI" />` : "";

  const qrCodeHeader = qrCode
    ? `<img src="${qrCode}" alt="QR Code" />`
    : `<p class="error">Facture non certifiée !</p>`;

  // ── Codes (string) depuis l'entête — FIX: plus de relations FK ─────────────
  // facture.code_type_facture, facture.code_type_facturation,
  // facture.code_mode_paiement, facture.code_devise sont des strings directs.

  const codeDevise = facture.code_devise || "XOF";

  // Libellé du type de facture : si une relation est incluse dans la query on l'utilise,
  // sinon on affiche le code brut.
  // FIX: l'ancienne relation type_facture n'existe plus dans le schéma tenant.
  // Adapter la query d'appel pour inclure un lookup si nécessaire, ou afficher le code.
  const libelleTypeFacture = facture.code_type_facture || "";

  // FIX: idem pour mode_paiement — plus de relation, on affiche le code.
  const libelleModePaiement = facture.code_mode_paiement || "";

  // ── Lignes d'articles ───────────────────────────────────────────────────────
  const itemRows = facture.detail_facture
    .map((item) => {
      const taxes = item.taxe_details
        ? item.taxe_details
            .map((t) => `${t.libelle_taxe_details || "Taxe"} (${t.taux_taxe_details}%)`)
            .join(", ")
        : "";

      return `
      <tr>
        <td>${item.reference_article || ""}</td>
        <td>${item.designation_article || ""}</td>
        <td class="right">${formatMontant(item.prix, codeDevise)}</td>
        <td class="center">${item.quantite}</td>
        <td class="center">${item.unite_vente || "PCS"}</td>
        <td>${taxes}</td>
        <td class="center">${item.remise || 0}</td>
        <td class="right">${formatMontant(item.montant_ht, codeDevise)}</td>
      </tr>`;
    })
    .join("");

  // ── Résumé des taxes ────────────────────────────────────────────────────────
  const taxesMap = new Map();

  // Taxes sur les lignes
  facture.detail_facture.forEach((item) => {
    if (item.taxe_details && item.taxe_details.length > 0) {
      item.taxe_details.forEach((tax) => {
        const key = `${tax.libelle_taxe_details}-${tax.taux_taxe_details}`;
        if (!taxesMap.has(key)) {
          taxesMap.set(key, {
            libelle: tax.libelle_taxe_details || "Taxe",
            taux: tax.taux_taxe_details,
            sousTotal: 0,
            montantTaxe: 0,
          });
        }
        const entry = taxesMap.get(key);
        entry.sousTotal += parseFloat(item.montant_ht);
        entry.montantTaxe += parseFloat(tax.montant_taxe_details || 0);
      });
    }
  });

  // Taxes au pied de facture
  if (facture.taxe_pieds && facture.taxe_pieds.length > 0) {
    facture.taxe_pieds.forEach((tax) => {
      const key = `${tax.libelle_taxe_pieds}-${tax.taux_taxe_pieds}`;
      if (!taxesMap.has(key)) {
        taxesMap.set(key, {
          libelle: tax.libelle_taxe_pieds || "Taxe",
          taux: tax.taux_taxe_pieds,
          sousTotal: parseFloat(facture.total_ttc || 0),
          montantTaxe: parseFloat(tax.montant_taxe_pieds || 0),
        });
      } else {
        taxesMap.get(key).montantTaxe += parseFloat(tax.montant_taxe_pieds || 0);
      }
    });
  }

  const taxSummaryRows = [];
  taxesMap.forEach((tax) => {
    taxSummaryRows.push(`
      <tr>
        <td>${tax.libelle}</td>
        <td class="right">${formatMontant(tax.sousTotal, codeDevise)}</td>
        <td class="right">${tax.taux}%</td>
        <td class="right">${formatMontant(tax.montantTaxe, codeDevise)}</td>
      </tr>
    `);
  });

  // ── Section devise étrangère ────────────────────────────────────────────────
  // FIX: facture.devise n'existe plus comme relation.
  // On utilise le paramètre optionnel deviseInfo passé à la fonction.
  // Exemple d'appel : generateInvoicePdfPuppeteer(facture, societe, { code_devise: "EUR", taux_devise: "655.957" })
  let deviseSection = "";
  if (deviseInfo && codeDevise !== "XOF") {
    const taux = parseFloat(deviseInfo.taux_devise || 1);
    const totalDevise = parseFloat(facture.total_ttc) / taux;
    deviseSection = `
    <div class="total-line">
      <span>TOTAL EN DEVISES ÉTRANGÈRES</span>
      <span class="bold">${formatMontant(totalDevise, codeDevise)} ${codeDevise}</span>
    </div>
  `;
  }

  // ── Calculs totaux ──────────────────────────────────────────────────────────
  const autresTaxes = parseFloat(facture.total_autre_taxe || 0);
  // FIX: on utilise directement facture.total_ttc (déjà calculé et persisté)
  const totalAPayer = parseFloat(facture.total_ttc || 0);
  // Total TTC intermédiaire (HT - remise + TVA) pour affichage séparé des autres taxes
  const totalTTCAvantAutresTaxes =
    Number(facture.total_ht) -
    Number(facture.total_remise) +
    Number(facture.total_tva);

  // ── Injection HTML ──────────────────────────────────────────────────────────
  html = html
    // Informations société
    // FIX: schéma master utilise raison_sociale_societe (pas libelle_societe)
    .replace(/{{SOC_NAME}}/g, societe.raison_sociale_societe || "")
    .replace(/{{NCC}}/g, societe.ncc || "")
    .replace(/{{REGIME_IMPOSITION}}/g, societe.regime_imposition || "")
    .replace(/{{CENTRE_IMPOTS}}/g, societe.centre_impot || "")
    .replace(/{{RCCM}}/g, societe.rccm || "")
    .replace(/{{REF_BANCAIRE}}/g, societe.ref_bancaire || "")
    .replace(/{{SOC_ADRESSE}}/g, societe.adresse || "")
    .replace(/{{SOC_TEL}}/g, societe.telephone || "")
    .replace(/{{SOC_EMAIL}}/g, societe.email || "")

    // Informations facture
    .replace(/{{FACTURE_NUM}}/g, facture.numero_facture || "")
    // FIX: code string direct, plus de relation type_facture
    .replace(/{{TYPE_FACTURE}}/g, libelleTypeFacture)
    .replace(/{{DATE}}/g, formatDate(facture.date_facture))
    .replace(/{{ETABLISSEMENT}}/g, facture.etablissement || "")
    .replace(/{{POINT_VENTE}}/g, facture.point_vente || "")
    .replace(/{{VENDEUR}}/g, "")
    // FIX: code string direct, plus de relation mode_paiement
    .replace(/{{MODE_PAIEMENT}}/g, libelleModePaiement)
    .replace(
      /{{AUTRE_MENTION}}/g,
      facture.information_complementaire?.autre_mention || "",
    )

    // Informations client
    .replace(
      /{{CLIENT_NOM}}/g,
      facture.tiers?.raison_sociale_tiers || facture.tiers?.code_tiers || "",
    )
    .replace(/{{CLIENT_ADRESSE}}/g, facture.tiers?.email_tiers || "")
    .replace(/{{CLIENT_NCC}}/g, facture.tiers?.ncc_tiers || "")

    // Articles
    .replace(/{{ITEM_ROWS}}/g, itemRows)

    // Totaux
    .replace(/{{TOTAL_HT}}/g, formatMontant(facture.total_ht, codeDevise))
    .replace(/{{REMISE}}/g, formatMontant(facture.total_remise, codeDevise))
    .replace(/{{HT_REMISE}}/g, formatMontant(
      Number(facture.total_ht) - Number(facture.total_remise),
      codeDevise,
    ))
    .replace(/{{TOTAL_TVA}}/g, formatMontant(facture.total_tva, codeDevise))
    // FIX: utilise le calcul intermédiaire (HT - remise + TVA), avant autres taxes
    .replace(/{{TOTAL_TTC}}/g, formatMontant(totalTTCAvantAutresTaxes, codeDevise))
    .replace(/{{AUTRES_TAXES}}/g, formatMontant(autresTaxes, codeDevise))
    // FIX: total_ttc persisté = net à payer final (inclut autres taxes)
    .replace(/{{TOTAL_A_PAYER}}/g, formatMontant(totalAPayer, codeDevise))
    .replace(/{{DEVISE_SECTION}}/g, deviseSection)

    // Résumé des taxes
    .replace(/{{TAX_SUMMARY_ROWS}}/g, taxSummaryRows.join(""))

    // Logos et QR Code
    .replace(/{{COMPANY_LOGO}}/g, companyLogo)
    .replace(/{{DGI_LOGO}}/g, dgiLogo)
    .replace(/{{QR_CODE_HEADER}}/g, qrCodeHeader)

    // Footer
    .replace(
      /{{FOOTER_ADRESSE}}/g,
      facture.information_complementaire?.pied_de_page || societe.adresse || "",
    );

  // ── Puppeteer ───────────────────────────────────────────────────────────────
  const browser = await puppeteer.launch({
    headless: "new",
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-gpu",
    ],
  });

  try {
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: "networkidle0", timeout: 30000 });
    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: { top: "15mm", bottom: "15mm", left: "12mm", right: "12mm" },
      preferCSSPageSize: false,
    });
    return pdfBuffer;
  } finally {
    await browser.close();
  }
};