const prisma = require("../../libs/master"); // ✅ client unique
const { generateInvoicePdfPuppeteer } = require("../../pdf/generateInvoicePdf");

exports.generateInvoicePDF = async (req, res) => {
  try {
    const { invoiceUuid } = req.body;
    const societeId = req.user?.societe_id; // ✅ corrigé : societeId → societe_id

    if (!invoiceUuid) {
      return res.status(400).json({ success: false, message: "UUID de la facture requis" });
    }

    if (!societeId) {
      return res.status(403).json({ success: false, message: "Société non identifiée. Veuillez vous reconnecter." });
    }

    const societe = await prisma.societe.findUnique({
      where: { id: Number(societeId) },
      select: {
        id: true,
        raison_sociale_societe: true, // ✅ corrigé : libelle_societe n'existe pas dans le schéma
        ncc: true,
        rccm: true,
        regime_imposition: true,
        centre_impot: true,
        ref_bancaire: true,
        adresse: true,
        telephone: true,
        email: true,
        logo_url: true,
        // ✅ bd_name, bd_user, bd_pass, bd_host, bd_port supprimés — plus nécessaires
      },
    });

    if (!societe) {
      return res.status(404).json({ success: false, message: "Société introuvable" });
    }

    // ✅ Plus de getTenantClient — filtrage direct par societe_id
    const facture = await prisma.entete_facture.findFirst({
      where: {
        uuid: invoiceUuid,
        societe_id: societe.id, // 🔑 sécurité : vérifier l'appartenance
      },
      include: {
        detail_facture: { include: { taxe_details: true } },
        taxe_pieds: true,
        tiers: true,
        information_complementaire: true,
      },
    });

    if (!facture) {
      return res.status(404).json({ success: false, message: "Facture introuvable" });
    }

    // ✅ Mapping inchangé — compatible avec le générateur PDF existant
    const dataForPdf = {
      ...facture,
      devise: { code_devise: facture.code_devise },
      mode_paiement: { libelle_mode_paiement: facture.code_mode_paiement },
      type_facture: { libelle_type_facture: facture.code_type_facture },
      type_facturation: { libelle_type_facturation: facture.code_type_facturation },
    };

    const pdfBuffer = await generateInvoicePdfPuppeteer(dataForPdf, societe);

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="Facture_${facture.numero_facture.replace(/\//g, "_")}.pdf"`,
    );
    res.setHeader("Content-Length", pdfBuffer.length);

    res.send(pdfBuffer);
  } catch (err) {
    console.error("Erreur lors de la génération du PDF:", err);

    if (err.name === "PrismaClientKnownRequestError") {
      return res.status(500).json({
        success: false,
        message: "Erreur de base de données",
        error: process.env.NODE_ENV === "development" ? err.message : undefined,
      });
    }

    res.status(500).json({
      success: false,
      message: "Erreur lors de la génération du PDF",
      error: process.env.NODE_ENV === "development" ? err.message : undefined,
    });
  }
};