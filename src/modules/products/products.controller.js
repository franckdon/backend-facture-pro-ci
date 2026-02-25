const prisma = require("../../libs/master")

exports.setupDefaulftTypesOfProduct = async (req, res) => {
  try {
    const types = [
      { code: 'BIEN', libelle: 'Bien matériel' },
      { code: 'SERVICE', libelle: 'Prestation de service' }
    ];

    for (const t of types) {
      await prisma.type_produit.upsert({
        where: { code: t.code },
        update: {},
        create: t,
      });
    }

    res.status(200).json({ success: true, message: "Types de base initialisés." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const { libelle, prix_base, description, type_uuid } = req.body;

    const typeRef = await prisma.type_produit.findUnique({
      where: { uuid: type_uuid }
    });

    if (!typeRef) return res.status(404).json({ message: "Type de produit invalide." });

    const newProduit = await prisma.produit.create({
      data: {
        libelle,
        prix_base: prix_base ? parseFloat(prix_base) : 0,
        description,
        type_produit_id: typeRef.id
      },
      include: { type_produit: true } 
    });

    res.status(201).json({ success: true, data: serializeBigInt(newProduit) });
  } catch (error) {
    res.status(500).json({ message: "Erreur création produit.", details: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { uuid } = req.params;
    const { libelle, prix_base, description, type_uuid } = req.body;

    let updateData = {
      libelle,
      prix_base: prix_base ? parseFloat(prix_base) : undefined,
      description
    };

    if (type_uuid) {
      const typeRef = await prisma.type_produit.findUnique({ where: { uuid: type_uuid } });
      if (!typeRef) return res.status(404).json({ message: "Nouveau type invalide." });
      updateData.type_produit_id = typeRef.id;
    }

    const updated = await prisma.produit.update({
      where: { uuid },
      data: updateData,
      include: { type_produit: true }
    });

    res.status(200).json({ success: true, data: serializeBigInt(updated) });
  } catch (error) {
    res.status(500).json({ message: "Erreur modification." });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { uuid } = req.params;
    await prisma.produit.delete({ where: { uuid } });
    res.status(200).json({ success: true, message: "Produit supprimé." });
  } catch (error) {
    res.status(500).json({ message: "Erreur suppression." });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const produits = await prisma.produit.findMany({
      include: {
        type_produit: {
          select: { libelle: true, code: true, uuid: true }
        }
      },
      orderBy: { libelle: 'asc' }
    });
    res.status(200).json({ success: true, data: serializeBigInt(produits) });
  } catch (error) {
    res.status(500).json({ message: "Erreur de chargement." });
  }
};