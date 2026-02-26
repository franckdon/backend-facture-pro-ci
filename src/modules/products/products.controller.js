const masterPrisma = require("../../libs/master");
const { getTenantClient } = require("../../libs/tenant");

// Fonction utilitaire pour récupérer le client tenant
const getTenant = async (req) => {
  const { code_societe } = req.user;
  const societe = await masterPrisma.societe.findFirst({
    where: { code_societe },
  });
  if (!societe) throw new Error("Société non identifiée.");
  return getTenantClient(societe);
};

// Helper pour sérialiser les BigInt (si pas déjà défini globalement)
const serialize = (data) => JSON.parse(JSON.stringify(data, (key, value) =>
  typeof value === "bigint" ? value.toString() : value
));

exports.setupDefaultTypesOfProduct = async (req, res) => {
  try {
    const tenantPrisma = await getTenant(req);
    const types = [
      { code: 'BIEN', libelle: 'Bien matériel' },
      { code: 'SERVICE', libelle: 'Prestation de service' }
    ];

    for (const t of types) {
      await tenantPrisma.type_produit.upsert({
        where: { code: t.code },
        update: {},
        create: t,
      });
    }

    res.status(200).json({ success: true, message: "Types de base initialisés pour cette société." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const { reference, designation, prix_base, description, type_uuid } = req.body;
    const tenantPrisma = await getTenant(req);

    const typeRef = await tenantPrisma.type_produit.findUnique({
      where: { uuid: type_uuid }
    });

    if (!typeRef) return res.status(404).json({ message: "Type de produit invalide." });

    const newProduit = await tenantPrisma.produit.create({
      data: {
        reference,
        designation,
        prix_base: prix_base ? parseFloat(prix_base) : 0,
        description,
        type_produit_id: typeRef.id
      },
      include: { type_produit: true } 
    });

    res.status(201).json({ success: true, data: serialize(newProduit) });
  } catch (error) {
    res.status(500).json({ message: "Erreur création produit.", details: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { uuid } = req.params;
    const { reference, designation, prix_base, description, type_uuid } = req.body;
    const tenantPrisma = await getTenant(req);

    let updateData = {
      reference,
      designation,
      prix_base: prix_base ? parseFloat(prix_base) : undefined,
      description
    };

    if (type_uuid) {
      const typeRef = await tenantPrisma.type_produit.findUnique({ where: { uuid: type_uuid } });
      if (!typeRef) return res.status(404).json({ message: "Nouveau type invalide." });
      updateData.type_produit_id = typeRef.id;
    }

    const updated = await tenantPrisma.produit.update({
      where: { uuid },
      data: updateData,
      include: { type_produit: true }
    });

    res.status(200).json({ success: true, data: serialize(updated) });
  } catch (error) {
    res.status(500).json({ message: "Erreur modification.", details: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { uuid } = req.params;
    const tenantPrisma = await getTenant(req);
    
    await tenantPrisma.produit.delete({ where: { uuid } });
    res.status(200).json({ success: true, message: "Produit supprimé." });
  } catch (error) {
    res.status(500).json({ message: "Erreur suppression.", details: error.message });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const tenantPrisma = await getTenant(req);
    const produits = await tenantPrisma.produit.findMany({
      include: {
        type_produit: {
          select: { libelle: true, code: true, uuid: true }
        }
      },
      orderBy: { designation: 'asc' }
    });
    res.status(200).json({ success: true, data: serialize(produits) });
  } catch (error) {
    res.status(500).json({ message: "Erreur de chargement.", details: error.message });
  }
};