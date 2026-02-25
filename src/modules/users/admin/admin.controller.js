const prisma = require('../../../libs/master');
const bcrypt = require("bcrypt");

exports.getAdminInfo = async (req, res) => {
  const adminId = req.admin._id; 

  if (!adminId) {
    return res.status(401).json({ 
      message: "Non autorisé: ID administrateur manquant." 
    });
  }

  try {
    const user = await prisma.utilisateur_admin.findUnique({
      where: { 
        id: Number(adminId) 
      },
      select: {
        uuid: true, 
        login: true,
        email: true,
        nom_complet: true,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "Administrateur introuvable." });
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (err) {
    console.error("Erreur getAdminInfo MySQL:", err.message);
    res.status(500).json({ 
      message: "Erreur serveur.", 
      error: err.message 
    });
  }
};

exports.createUser = async (req, res) => {
  try {
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

    const societe = await prisma.societe.findUnique({
      where: { uuid: societe_uuid },
      include: {
        licence: {
          where: { statut: { code: "ACTIF" } },
          include: { plan: true },
        },
        _count: {
          select: { utilisateur_client: true }, 
        },
      },
    });

    if (!societe) {
      return res.status(404).json({ message: "Société introuvable." });
    }

    const licenceActive = societe.licence[0];

    if (!licenceActive) {
      return res.status(403).json({ 
        message: "Action impossible : la société n'a aucune licence active." 
      });
    }

    const limiteAtteinte = societe._count.utilisateur_client >= licenceActive.plan.limite_utilisateurs;

    if (limiteAtteinte) {
      return res.status(403).json({
        message: `Limite d'utilisateurs atteinte. Votre plan "${licenceActive.plan.libelle}" est limité à ${licenceActive.plan.limite_utilisateurs} utilisateur(s).`,
      });
    }

    const hashedPassword = await bcrypt.hash(mot_de_passe, 10);

    const newUser = await prisma.utilisateur_client.create({
      data: {
        email: email.toLowerCase().trim(),
        login: login.trim(),
        mot_de_passe: hashedPassword,
        nom_complet: nom_complet || "",
        telephone: telephone || null,
        statut_id: statut_id ? Number(statut_id) : 1,
        role_id: BigInt(role_id),
        societe_id: societe.id,
        tokenVersion: 1,
      },
      include: {
        role: true,
        statut: true
      }
    });

    return res.status(201).json({
      success: true,
      message: "Utilisateur créé avec succès.",
      data: serializeBigInt({
        uuid: newUser.uuid,
        login: newUser.login,
        email: newUser.email,
        role: newUser.role?.libelle,
      }),
    });

  } catch (error) {
    console.error("Erreur createUser:", error);
    
    if (error.code === "P2002") {
      return res.status(409).json({ message: "Le login ou l'email est déjà utilisé." });
    }

    return res.status(500).json({ 
      message: "Erreur serveur lors de la création de l'utilisateur.",
      details: error.message 
    });
  }
};

exports.updateUser = async (req, res) => {
  const { uuid } = req.params;
  const {
    email,
    login,
    nom_complet,
    telephone,
    role_id,
    statut_id,
    societe_uuid,
  } = req.body;

  if (!uuid) {
    return res.status(400).json({ message: "L'UUID est requis." });
  }

  try {
    let internal_societe_id = undefined;

    if (societe_uuid !== undefined) {
      if (societe_uuid === null) {
        internal_societe_id = null;
      } else {
        const societe = await prisma.societe.findUnique({
          where: { uuid: societe_uuid },
          select: { id: true },
        });
        if (!societe)
          return res
            .status(404)
            .json({ message: "Société cible introuvable." });
        internal_societe_id = societe.id;
      }
    }

    if (
      Number(role_id) === 2 &&
      !internal_societe_id &&
      societe_uuid !== null
    ) {
      return res.status(403).json({
        message:
          "Règle métier: Un utilisateur de société (ID 2) doit être lié à une societe_id.",
      });
    }

    await prisma.utilisateur_client.update({
      where: { uuid: uuid },
      data: {
        email,
        login,
        nom_complet,
        telephone,
        role_id: role_id !== undefined ? BigInt(role_id) : undefined,
        statut_id: statut_id !== undefined ? Number(statut_id) : undefined,
        societe_id: internal_societe_id,
      },
    });

    res.status(200).json({ message: "Utilisateur mis à jour avec succès." });
  } catch (e) {
    console.error(`Erreur update utilisateur MySQL:`, e);
    if (e.code === "P2025")
      return res.status(404).json({ message: "Utilisateur non trouvé." });

    res.status(500).json({ message: "Erreur lors de la modification." });
  }
};

exports.deleteUser = async (req, res) => {
  const { uuid } = req.params;

  if (!uuid) {
    return res.status(400).json({ message: "L'UUID est requis." });
  }

  try {
    await prisma.utilisateur_client.delete({
      where: { uuid: uuid },
    });

    return res
      .status(200)
      .json({ message: "Utilisateur supprimé avec succès." });
  } catch (e) {
    console.error(`Erreur delete utilisateur MySQL:`, e);

    if (e.code === "P2025") {
      return res.status(404).json({ message: "Utilisateur non trouvé." });
    }

    if (e.code === "P2003") {
      return res.status(409).json({
        message:
          "Impossible de supprimer cet utilisateur car il est lié à d'autres enregistrements.",
      });
    }

    res.status(500).json({ message: "Erreur lors de la suppression." });
  }
};
