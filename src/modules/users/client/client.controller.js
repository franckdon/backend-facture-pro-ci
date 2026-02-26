const bcrypt = require("bcrypt");
const prisma = require("../../../libs/master");
const fs = require("fs");
const path = require("path");

const serialize = (data) =>
  JSON.parse(
    JSON.stringify(data, (k, v) => (typeof v === "bigint" ? v.toString() : v)),
  );

exports.createUser = async (req, res) => {
  const {
    email,
    login,
    mot_de_passe,
    nom_complet,
    telephone,
    role_id,
    statut_id,
    societe_uuid,
  } = req.body;

  if (!email || !login || !mot_de_passe || !role_id || !societe_uuid) {
    return res.status(400).json({ message: "Champs requis manquants." });
  }

  try {
    const societe = await prisma.societe.findUnique({
      where: { uuid: societe_uuid },
      include: {
        licence: {
          where: { statut: { code: "ACTIF" } },
          include: { plan: true },
        },
        _count: { select: { utilisateur_client: true } },
      },
    });

    if (!societe)
      return res.status(404).json({ message: "Société introuvable." });

    // 2. Vérification du quota du Plan
    const activeLicence = societe.licence;
    if (!activeLicence) {
      return res
        .status(403)
        .json({ message: "La société n'a pas de licence active." });
    }

    if (
      societe._count.utilisateur_client >=
      activeLicence.plan.limite_utilisateurs
    ) {
      return res.status(403).json({
        message: `Quota atteint. Limite : ${activeLicence.plan.limite_utilisateurs} utilisateurs.`,
      });
    }

    // 3. Création
    const hashedPassword = await bcrypt.hash(mot_de_passe, 10);
    const newUser = await prisma.utilisateur_client.create({
      data: {
        email: email.toLowerCase().trim(),
        login: login.trim(),
        mot_de_passe: hashedPassword,
        nom_complet: nom_complet || "",
        telephone: telephone || null,
        role_id: BigInt(role_id),
        statut_id: Number(statut_id),
        societe_id: societe.id,
        tokenVersion: 1,
      },
    });

    return res
      .status(201)
      .json({ message: "Utilisateur créé.", user: serialize(newUser) });
  } catch (e) {
    if (e.code === "P2002")
      return res.status(409).json({ message: "Email ou Login déjà utilisé." });
    res.status(500).json({ error: e.message });
  }
};

exports.updateUser = async (req, res) => {
  const { uuid } = req.params;
  const { email, login, nom_complet, telephone, role_id, statut_id } = req.body;

  try {
    const updatedUser = await prisma.utilisateur_client.update({
      where: { uuid },
      data: {
        email,
        login,
        nom_complet,
        telephone,
        role_id: role_id !== undefined ? BigInt(role_id) : undefined,
        statut_id: statut_id !== undefined ? Number(statut_id) : undefined,
      },
    });

    res
      .status(200)
      .json({
        message: "Utilisateur mis à jour.",
        user: serialize(updatedUser),
      });
  } catch (e) {
    if (e.code === "P2025")
      return res.status(404).json({ message: "Utilisateur introuvable." });
    res.status(500).json({ error: e.message });
  }
};

exports.deleteUser = async (req, res) => {
  const { uuid } = req.params;
  try {
    await prisma.utilisateur_client.delete({ where: { uuid } });
    res.status(200).json({ message: "Utilisateur supprimé avec succès." });
  } catch (e) {
    if (e.code === "P2025")
      return res.status(404).json({ message: "Utilisateur introuvable." });
    res.status(500).json({ error: e.message });
  }
};

exports.updateSociete = async (req, res) => {
  const { uuid } = req.params;
  const { societe_uuid: session_societe_uuid } = req.user;
  const logoFile = req.file;

  if (uuid !== session_societe_uuid) {
    return res
      .status(403)
      .json({
        message:
          "Accès refusé : vous ne pouvez modifier que votre propre société.",
      });
  }

  try {
    const existingSociete = await prisma.societe.findUnique({
      where: { uuid },
      select: { logo_url: true },
    });

    if (!existingSociete) {
      return res.status(404).json({ message: "Société introuvable." });
    }

    const allowedFields = [
      "raison_sociale_societe",
      "ncc",
      "rccm",
      "regime_imposition",
      "centre_impot",
      "ref_bancaire",
      "adresse",
      "telephone",
      "email",
    ];

    const updateData = {};
    allowedFields.forEach((field) => {
      if (req.body[field] !== undefined) {
        updateData[field] = req.body[field]?.trim();
      }
    });

    if (logoFile) {
      updateData.logo_url = `/uploads/logos/${logoFile.filename}`;

      if (existingSociete.logo_url) {
        const oldPath = path.join(__dirname, "../..", existingSociete.logo_url);
        fs.unlink(oldPath, (err) => {
          if (err)
            console.warn("Impossible de supprimer l'ancien logo:", err.message);
        });
      }
    }

    const updatedSociete = await prisma.societe.update({
      where: { uuid: uuid },
      data: updateData,
    });

    return res.status(200).json({
      success: true,
      message: "Société mise à jour avec succès.",
      data: serializeBigInt(updatedSociete),
    });
  } catch (e) {
    console.error(`Erreur updateSociete:`, e);

    if (logoFile) {
      fs.unlink(logoFile.path, () => {});
    }

    return res.status(500).json({
      message: "Erreur lors de la mise à jour.",
      details: e.message,
    });
  }
};
