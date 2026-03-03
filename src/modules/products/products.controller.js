const prisma = require("../../libs/master"); // ✅ client unique

const serialize = (data) => JSON.parse(JSON.stringify(data, (key, value) =>
  typeof value === "bigint" ? value.toString() : value
));

// ✅ Helper simplifié — plus besoin de récupérer la societe pour getTenantClient
const getSocieteId = (req) => {
  const societe_id = req.user?.societe_id;
  if (!societe_id) throw new Error("Société non identifiée.");
  return societe_id;
};

exports.setupDefaultTypesOfProduct = async (req, res) => {
  try {
    const societe_id = getSocieteId(req);
    const types = [
      { code: "BIEN", libelle: "Bien matériel" },
      { code: "SERVICE", libelle: "Prestation de service" },
    ];

    for (const t of types) {
      // ✅ upsert sur [societe_id, code] — contrainte unique du schéma fusionné
      await prisma.type_produit.upsert({
        where: { societe_id_code: { societe_id, code: t.code } },
        update: {},
        create: { societe_id, ...t }, // 🔑
      });
    }

    res.status(200).json({ success: true, message: "Types de base initialisés pour cette société." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const societe_id = getSocieteId(req);
    const { reference, designation, prix_base, description, type_uuid } = req.body;

    const typeRef = await prisma.type_produit.findFirst({
      where: { uuid: type_uuid, societe_id }, // 🔑 vérifier l'appartenance
    });

    if (!typeRef) return res.status(404).json({ message: "Type de produit invalide." });

    const newProduit = await prisma.produit.create({
      data: {
        societe_id, // 🔑
        reference,
        designation,
        prix_base: prix_base ? parseFloat(prix_base) : 0,
        description,
        type_produit_id: typeRef.id,
      },
      include: { type_produit: true },
    });

    res.status(201).json({ success: true, data: serialize(newProduit) });
  } catch (error) {
    res.status(500).json({ message: "Erreur création produit.", details: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const societe_id = getSocieteId(req);
    const { uuid } = req.params;
    const { reference, designation, prix_base, description, type_uuid } = req.body;

    let updateData = {
      reference,
      designation,
      prix_base: prix_base ? parseFloat(prix_base) : undefined,
      description,
    };

    if (type_uuid) {
      const typeRef = await prisma.type_produit.findFirst({
        where: { uuid: type_uuid, societe_id }, // 🔑 vérifier l'appartenance
      });
      if (!typeRef) return res.status(404).json({ message: "Nouveau type invalide." });
      updateData.type_produit_id = typeRef.id;
    }

    const updated = await prisma.produit.update({
      where: {
        uuid,
        societe_id, // 🔑 Prisma vérifie que le produit appartient bien à cette société
      },
      data: updateData,
      include: { type_produit: true },
    });

    res.status(200).json({ success: true, data: serialize(updated) });
  } catch (error) {
    res.status(500).json({ message: "Erreur modification.", details: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const societe_id = getSocieteId(req);
    const { uuid } = req.params;

    await prisma.produit.delete({
      where: { uuid, societe_id }, // 🔑
    });

    res.status(200).json({ success: true, message: "Produit supprimé." });
  } catch (error) {
    res.status(500).json({ message: "Erreur suppression.", details: error.message });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const societe_id = getSocieteId(req);

    const produits = await prisma.produit.findMany({
      where: { societe_id }, // 🔑
      include: {
        type_produit: { select: { libelle: true, code: true, uuid: true } },
      },
      orderBy: { designation: "asc" },
    });

    res.status(200).json({ success: true, data: serialize(produits) });
  } catch (error) {
    res.status(500).json({ message: "Erreur de chargement.", details: error.message });
  }
};