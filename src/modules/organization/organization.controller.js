const prisma = require("../../libs/master");

const serializeBigInt = (data) => {
  return JSON.parse(
    JSON.stringify(data, (key, value) =>
      typeof value === "bigint" ? value.toString() : value,
    ),
  );
};

exports.createEstablishment = async (req, res) => {
  try {
    const { societe_uuid } = req.user;
    const { code_etablissement, libelle_etablissement } = req.body;

    if (!code_etablissement || !libelle_etablissement) {
      return res.status(400).json({ message: "Le code et le libellé sont requis." });
    }

    const societe = await prisma.societe.findUnique({
      where: { uuid: societe_uuid },
      select: { id: true },
    });

    if (!societe) {
      return res.status(404).json({ message: "Société introuvable." });
    }

    const newEtab = await prisma.etablissement.create({
      data: {
        societe_id: societe.id,
        code_etablissement: code_etablissement.trim(), 
        libelle_etablissement: libelle_etablissement.trim(),
      },
    });

    res.status(201).json({ 
      success: true, 
      data: serializeBigInt(newEtab) 
    });

  } catch (error) {
    
    console.error("Erreur CreateEstablishment:", error);
    res.status(500).json({ message: "Erreur serveur lors de la création." });
  }
};

exports.createPointOfSale = async (req, res) => {
  try {
    const { societe_uuid } = req.user; 
    const { etablissement_uuid, libelle_pdv } = req.body;

    if (!etablissement_uuid || !libelle_pdv) {
      return res.status(400).json({
        message: "Le libellé et l'établissement sont obligatoires.",
      });
    }

    const etablissement = await prisma.etablissement.findFirst({
      where: { 
        uuid: etablissement_uuid,
        societe: { uuid: societe_uuid } 
      },
      select: { id: true }
    });

    if (!etablissement) {
      return res.status(404).json({ 
        message: "Établissement non trouvé ou accès non autorisé." 
      });
    }

    const newPDV = await prisma.point_vente.create({
      data: {
        libelle_pdv: libelle_pdv.trim(),
        etablissement_id: etablissement.id,
      },
    });

    return res.status(201).json({
      success: true,
      message: "Point de vente créé avec succès",
      data: serializeBigInt(newPDV),
    });

  } catch (error) {
    console.error("Erreur CreatePDV:", error);
    return res.status(500).json({ message: "Erreur serveur lors de la création." });
  }
};


exports.deleteEstablishment = async (req, res) => {
  try {
    const { uuid } = req.params;
    const { societe_uuid } = req.user;

    const etablissement = await prisma.etablissement.findFirst({
      where: { uuid, societe: { uuid: societe_uuid } },
      select: { id: true, libelle_etablissement: true },
    });

    if (!etablissement) {
      return res.status(404).json({ message: "Établissement introuvable ou accès refusé." });
    }

    await prisma.etablissement.delete({ where: { id: etablissement.id } });

    return res.status(200).json({
      success: true,
      message: `L'établissement "${etablissement.libelle_etablissement}" a été supprimé.`,
    });
  } catch (error) {
    res.status(500).json({ message: "Erreur suppression.", details: error.message });
  }
};

exports.deletePointOfSale = async (req, res) => {
  try {
    const { uuid } = req.params;
    const { societe_uuid } = req.user;

    const pdv = await prisma.point_vente.findFirst({
      where: { 
        uuid, 
        etablissement: { societe: { uuid: societe_uuid } } 
      },
      select: { id: true, libelle_pdv: true },
    });

    if (!pdv) return res.status(404).json({ message: "Point de vente introuvable." });

    await prisma.point_vente.delete({ where: { id: pdv.id } });
    res.status(200).json({ success: true, message: "Point de vente supprimé." });
  } catch (error) {
    res.status(500).json({ message: "Erreur suppression.", details: error.message });
  }
};

exports.updateEstablishment = async (req, res) => {
  try {
    const { uuid } = req.params;
    const { societe_uuid } = req.user;
    const { code_etablissement, libelle_etablissement } = req.body;

    const etablissement = await prisma.etablissement.findFirst({
      where: { uuid, societe: { uuid: societe_uuid } },
      select: { id: true },
    });

    if (!etablissement) return res.status(404).json({ message: "Établissement introuvable." });

    const updatedEtab = await prisma.etablissement.update({
      where: { id: etablissement.id },
      data: {
        code_etablissement: code_etablissement?.toUpperCase().trim(),
        libelle_etablissement: libelle_etablissement?.trim(),
      },
    });

    return res.status(200).json({
      success: true,
      data: serializeBigInt(updatedEtab),
    });
  } catch (error) {
    if (error.code === "P2002") return res.status(409).json({ message: "Code déjà utilisé." });
    res.status(500).json({ message: "Erreur modification.", details: error.message });
  }
};

exports.updatePointOfSale = async (req, res) => {
  try {
    const { uuid } = req.params;
    const { societe_uuid } = req.user;
    const { libelle_pdv, etablissement_uuid } = req.body;

    const pdv = await prisma.point_vente.findFirst({
      where: { uuid, etablissement: { societe: { uuid: societe_uuid } } },
      select: { id: true },
    });

    if (!pdv) return res.status(404).json({ message: "Point de vente introuvable." });

    let updateData = { libelle_pdv: libelle_pdv?.trim() };

    if (etablissement_uuid) {
      const targetEtab = await prisma.etablissement.findFirst({
        where: { uuid: etablissement_uuid, societe: { uuid: societe_uuid } },
        select: { id: true },
      });

      if (!targetEtab) return res.status(404).json({ message: "Nouvel établissement invalide." });
      updateData.etablissement_id = targetEtab.id;
    }

    const updatedPDV = await prisma.point_vente.update({
      where: { id: pdv.id },
      data: updateData,
    });

    return res.status(200).json({
      success: true,
      data: serializeBigInt(updatedPDV),
    });
  } catch (error) {
    res.status(500).json({ message: "Erreur modification.", details: error.message });
  }
};