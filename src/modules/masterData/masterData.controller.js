const prisma = require("../../libs/master");

const serialize = (data) => {
  return JSON.parse(
    JSON.stringify(data, (key, value) =>
      typeof value === "bigint" ? value.toString() : value,
    ),
  );
};

exports.setupMasterData = async (req, res) => {
  try {
    // 1. Taux d'imposition (Modèle: taux_imposition)
    const taxRates = [
      {
        code: "TOB_5",
        pourcentage: 5,
        description: "Taxes sur les opérations bancaires 5%",
      },
      {
        code: "TOB_10",
        pourcentage: 10,
        description: "Taxes sur les opérations bancaires 10%",
      },
      {
        code: "TDT",
        pourcentage: 0,
        description: "Taxes pour le développement touristique",
      },
      {
        code: "TVA_EXO_TRANS",
        pourcentage: 0,
        description: "TVA exo sur transport - TVA sur HT",
      },
      {
        code: "TVA_D",
        pourcentage: 0,
        description: "TVA exo.lég - D (TEE, TCE, Microentreprise)",
      },
      {
        code: "TVA_B",
        pourcentage: 9,
        description: "TVA réduite - 09,00% - B",
      },
      {
        code: "TVA_A",
        pourcentage: 18,
        description: "TVA normale - 18,00% - A",
      },
      {
        code: "TVA_C",
        pourcentage: 0,
        description: "TVA exo.conv - 00,00% - C",
      },
    ];

    // 2. Modes de paiement (Modèle: mode_paiement)
    const paymentModes = [
      {
        code_mode_paiement: "cash",
        libelle_mode_paiement: "Paiement en espèces",
      },
      {
        code_mode_paiement: "transfer",
        libelle_mode_paiement: "Virement bancaire",
      },
      { code_mode_paiement: "card", libelle_mode_paiement: "Carte bancaire " },
      {
        code_mode_paiement: "mobile-money",
        libelle_mode_paiement: "Paiement mobile (Orange, MTN, Moov, Wave)",
      },
      {
        code_mode_paiement: "deferred",
        libelle_mode_paiement: "Paiement différé",
      },
    ];

    // 3. Devises (Modèle: devise - taux_devise est un String ici)
    const currencies = [
      { code_devise: "XOF", taux_devise: "1", description: "Franc CFA" },
      { code_devise: "EUR", taux_devise: "655.957", description: "Euro" },
      { code_devise: "USD", taux_devise: "600", description: "US Dollar" },
    ];

    // 4. Types de facture (Modèle: type_facture)
    const invoiceTypes = [
      { code_type_facture: "VENTE", libelle_type_facture: "Facture de vente" },
      { code_type_facture: "AVOIR", libelle_type_facture: "Facture d'avoir" },
      {
        code_type_facture: "ACHAT",
        libelle_type_facture: "Bordereau d'achat de produit agricole",
      },
    ];

    // 5. Types de facturation (Modèle: type_facturation)
    const billingTypes = [
      {
        code_type_facturaction: "B2B",
        libelle_type_facturation: "Business to Business",
      },
      {
        code_type_facturaction: "B2C",
        libelle_type_facturation: "Business to Consumer",
      },
      {
        code_type_facturaction: "B2G",
        libelle_type_facturation: "Business to Government",
      },
      {
        code_type_facturaction: "B2F",
        libelle_type_facturation: "Business to Foreigner",
      },
    ];

    await Promise.all([
      ...taxRates.map((t) =>
        prisma.taux_imposition.upsert({
          where: { code: t.code },
          update: t,
          create: t,
        }),
      ),
      ...paymentModes.map((m) =>
        prisma.mode_paiement.upsert({
          where: { code_mode_paiement: m.code_mode_paiement },
          update: m,
          create: m,
        }),
      ),
      ...currencies.map((c) =>
        prisma.devise.upsert({
          where: { code_devise: c.code_devise },
          update: c,
          create: c,
        }),
      ),
      ...invoiceTypes.map((it) =>
        prisma.type_facture.upsert({
          where: { code_type_facture: it.code_type_facture },
          update: it,
          create: it,
        }),
      ),
      ...billingTypes.map((bt) =>
        prisma.type_facturation.upsert({
          where: { code_type_facturaction: bt.code_type_facturaction },
          update: bt,
          create: bt,
        }),
      ),
    ]);

    return res
      .status(200)
      .json({ message: "Master Data initialisée avec UUIDs automatiques." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erreur lors du setup." });
  }
};

// Créer un taux
exports.createTaxRate = async (req, res) => {
  const { code, pourcentage, description } = req.body;
  try {
    const result = await prisma.taux_imposition.create({
      data: { code, pourcentage: parseFloat(pourcentage), description },
    });
    res.status(201).json(serialize(result));
  } catch (e) {
    res
      .status(500)
      .json({ message: "Erreur lors de la création", error: e.message });
  }
};

exports.getAllTaxRates = async (req, res) => {
  try {
    const rates = await prisma.taux_imposition.findMany({
      orderBy: { pourcentage: "asc" },
    });
    res.status(200).json(serialize(rates));
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.updateTaxRate = async (req, res) => {
  const { uuid } = req.params;
  const { code, pourcentage, description } = req.body; // On récupère les bonnes clés
  try {
    const result = await prisma.taux_imposition.update({
      where: { uuid },
      data: {
        code,
        pourcentage: pourcentage ? parseFloat(pourcentage) : undefined,
        description,
      },
    });
    res.status(200).json({ success: true, data: serialize(result) });
  } catch (e) {
    res.status(404).json({
      success: false,
      message: "Taux non trouvé ou erreur de mise à jour",
    });
  }
};

// Supprimer un taux via UUID
exports.deleteTaxRate = async (req, res) => {
  const { uuid } = req.params;
  try {
    await prisma.taux_imposition.delete({ where: { uuid } });
    res.status(200).json({ message: "Taux supprimé avec succès" });
  } catch (e) {
    res.status(500).json({ message: "Erreur suppression" });
  }
};

exports.createPaymentMode = async (req, res) => {
  const { code_mode_paiement, libelle_mode_paiement } = req.body;
  try {
    const result = await prisma.mode_paiement.create({
      data: { code_mode_paiement, libelle_mode_paiement },
    });
    res.status(201).json(serialize(result));
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.getAllPaymentModes = async (req, res) => {
  try {
    const modes = await prisma.mode_paiement.findMany({
      orderBy: { libelle_mode_paiement: "asc" },
    });
    res.status(200).json(serialize(modes));
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.updatePaymentMode = async (req, res) => {
  const { uuid } = req.params;
  const { code_mode_paiement, libelle_mode_paiement } = req.body; // On récupère les bonnes clés

  try {
    const result = await prisma.mode_paiement.update({
      where: { uuid },
      data: {
        code_mode_paiement,
        libelle_mode_paiement,
      },
    });
    res.status(200).json(serialize(result));
  } catch (e) {
    res.status(404).json({ message: "Mode introuvable" });
  }
};

exports.deletePaymentMode = async (req, res) => {
  const { uuid } = req.params;
  try {
    await prisma.mode_paiement.delete({ where: { uuid } });
    res.status(200).json({ message: "Supprimé" });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.createCurrency = async (req, res) => {
  const { code_devise, taux_devise, description } = req.body;
  try {
    const result = await prisma.devise.create({
      data: { code_devise, taux_devise: taux_devise.toString(), description },
    });
    res.status(201).json(serialize(result));
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.getAllCurrencies = async (req, res) => {
  try {
    const currencies = await prisma.devise.findMany();
    res.status(200).json(serialize(currencies));
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.updateCurrency = async (req, res) => {
  const { uuid } = req.params;
  const { code_devise, taux_devise, description } = req.body;
  try {
    const result = await prisma.devise.update({
      where: { uuid },
      data: {
        code_devise,
        taux_devise,
        description,
      },
    });
    res.status(200).json(serialize(result));
  } catch (e) {
    res.status(404).json({ message: "Devise introuvable" });
  }
};

exports.deleteCurrency = async (req, res) => {
  const { uuid } = req.params;
  try {
    await prisma.devise.delete({ where: { uuid } });
    res.status(200).json({ message: "Devise supprimée" });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.createBillingType = async (req, res) => {
  const { code_type_facturaction, libelle_type_facturation } = req.body;
  try {
    const result = await prisma.type_facturation.create({
      data: { code_type_facturaction, libelle_type_facturation },
    });
    res.status(201).json(serialize(result));
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.getAllBillingTypes = async (req, res) => {
  try {
    const types = await prisma.type_facturation.findMany();
    res.status(200).json(serialize(types));
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.updateBillingType = async (req, res) => {
  const { uuid } = req.params;
  try {
    const result = await prisma.type_facturation.update({
      where: { uuid },
      data: req.body,
    });
    res.status(200).json(serialize(result));
  } catch (e) {
    res.status(404).json({ message: "Type introuvable" });
  }
};

exports.deleteBillingType = async (req, res) => {
  const { uuid } = req.params;
  try {
    await prisma.type_facturation.delete({ where: { uuid } });
    res.status(200).json({ message: "Type supprimé" });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.getAllInvoiceTypes = async (req, res) => {
  try {
    const types = await prisma.type_facture.findMany();
    res.status(200).json(serialize(types));
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.createInvoiceType = async (req, res) => {
  const { code_type_facture, libelle_type_facture } = req.body;
  try {
    const result = await prisma.type_facture.create({
      data: { code_type_facture, libelle_type_facture },
    });
    res.status(201).json(serialize(result));
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.updateInvoiceType = async (req, res) => {
  const { uuid } = req.params;
  const { code_type_facture, libelle_type_facture } = req.body;

  try {
    const result = await prisma.type_facture.update({
      where: { uuid },
      data: {
        code_type_facture,
        libelle_type_facture,
      },
    });
    res.status(200).json(serialize(result));
  } catch (e) {
    res.status(404).json({ message: "Type introuvable" });
  }
};

exports.deleteInvoiceType = async (req, res) => {
  const { uuid } = req.params;
  try {
    await prisma.type_facture.delete({ where: { uuid } });
    res.status(200).json({ message: "Tye facture supprimée" });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
