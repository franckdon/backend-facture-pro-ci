const prisma = require("../../libs/master");
const { v4: uuidv4 } = require("uuid");

const getSocieteId = (req) => {
  const societe_id = req.user?.societe_id;
  if (!societe_id) throw new Error("Société non identifiée.");
  return societe_id;
};

const serialize = (obj) =>
  JSON.parse(
    JSON.stringify(obj, (key, value) =>
      typeof value === "bigint" ? value.toString() : value
    )
  );

exports.setupDefaultTypesOfProduct = async (req, res) => {
  try {
    const types = [
      { code: "BIEN", libelle: "Bien matériel" },
      { code: "SERVICE", libelle: "Prestation de service" },
    ];

    for (const t of types) {
      await prisma.type_produit.upsert({
        where: { code: t.code },
        update: { libelle: t.libelle },
        create: { ...t },
      });
    }

    return res.status(200).json({
      success: true,
      message: "Types de produits globaux initialisés.",
    });
  } catch (error) {
    console.error("Erreur setupDefaultTypesOfProduct:", error);
    return res.status(500).json({ error: error.message });
  }
};


exports.getProductTypes = async (req, res) => {
  try {
    const types = await prisma.type_produit.findMany({
      orderBy: { libelle: "asc" },
      select: { id: true, uuid: true, code: true, libelle: true },
    });

    return res.status(200).json(serialize({ success: true, productTypes: types }));
  } catch (error) {
    console.error("Erreur getProductTypes:", error);
    return res.status(500).json({ error: error.message });
  }
};


exports.getAllProducts = async (req, res) => {
  try {
    const societe_id = getSocieteId(req);

    const products = await prisma.produit.findMany({
      where: { societe_id },
      include: {
        type_produit: {
          select: { id: true, uuid: true, code: true, libelle: true },
        },
      },
      orderBy: { cree_le: "desc" },
    });

    return res.status(200).json(serialize({ success: true, products }));
  } catch (error) {
    console.error("Erreur getAllProducts:", error);
    return res.status(500).json({ error: error.message });
  }
};


exports.createProduct = async (req, res) => {
  const { reference, designation, prix_base, description, type_produit_id } = req.body;

  try {
    if (!reference?.trim())
      return res.status(400).json({ error: "La référence est requise." });
    if (!designation?.trim())
      return res.status(400).json({ error: "La désignation est requise." });
    if (!type_produit_id)
      return res.status(400).json({ error: "Le type de produit est requis." });

    const societe_id = getSocieteId(req);

    const existing = await prisma.produit.findFirst({
      where: { societe_id, reference: reference.trim() },
    });
    if (existing)
      return res.status(409).json({
        error: `Un produit avec la référence « ${reference} » existe déjà.`,
      });

    const product = await prisma.produit.create({
      data: {
        uuid: uuidv4(),
        societe_id,
        reference: reference.trim(),
        designation: designation.trim(),
        prix_base: parseFloat(prix_base || 0),
        description: description?.trim() || null,
        type_produit_id: BigInt(type_produit_id),
      },
      include: {
        type_produit: {
          select: { id: true, uuid: true, code: true, libelle: true },
        },
      },
    });

    return res.status(201).json(
      serialize({ success: true, product, message: "Produit créé avec succès." })
    );
  } catch (error) {
    console.error("Erreur createProduct:", error);
    return res.status(500).json({ error: error.message });
  }
};


exports.updateProduct = async (req, res) => {
  const { uuid } = req.params;
  const { reference, designation, prix_base, description, type_produit_id } = req.body;

  try {
    const societe_id = getSocieteId(req);

    const product = await prisma.produit.findFirst({
      where: { uuid, societe_id },
    });
    if (!product)
      return res.status(404).json({ error: "Produit introuvable." });

    if (reference && reference.trim() !== product.reference) {
      const conflict = await prisma.produit.findFirst({
        where: {
          societe_id,
          reference: reference.trim(),
          NOT: { uuid },
        },
      });
      if (conflict)
        return res.status(409).json({
          error: `La référence « ${reference} » est déjà utilisée.`,
        });
    }

    const updated = await prisma.produit.update({
      where: { uuid },
      data: {
        ...(reference && { reference: reference.trim() }),
        ...(designation && { designation: designation.trim() }),
        ...(prix_base !== undefined && { prix_base: parseFloat(prix_base) }),
        ...(description !== undefined && { description: description?.trim() || null }),
        ...(type_produit_id && { type_produit_id: BigInt(type_produit_id) }),
      },
      include: {
        type_produit: {
          select: { id: true, uuid: true, code: true, libelle: true },
        },
      },
    });

    return res.status(200).json(
      serialize({ success: true, product: updated, message: "Produit mis à jour." })
    );
  } catch (error) {
    console.error("Erreur updateProduct:", error);
    return res.status(500).json({ error: error.message });
  }
};


exports.deleteProduct = async (req, res) => {
  const { uuid } = req.params;

  try {
    const societe_id = getSocieteId(req);

    const product = await prisma.produit.findFirst({
      where: { uuid, societe_id },
    });
    if (!product)
      return res.status(404).json({ error: "Produit introuvable." });

    await prisma.produit.delete({ where: { uuid } });

    return res.status(200).json({ success: true, message: "Produit supprimé." });
  } catch (error) {
    console.error("Erreur deleteProduct:", error);
    return res.status(500).json({ error: error.message });
  }
};