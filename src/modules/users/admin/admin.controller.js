const prisma = require("../../../libs/master");
const bcrypt = require("bcrypt");

const serializeBigInt = (data) => {
  return JSON.parse(
    JSON.stringify(data, (key, value) =>
      typeof value === "bigint" ? value.toString() : value,
    ),
  );
};

exports.getAdminInfo = async (req, res) => {
  const adminId = req.admin._id;

  if (!adminId) {
    return res.status(401).json({
      message: "Non autorisé: ID administrateur manquant.",
    });
  }

  try {
    const user = await prisma.utilisateur_admin.findUnique({
      where: {
        id: Number(adminId),
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
      error: err.message,
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
        licences: {
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

    const licenceActive = societe.licences[0];

    if (!licenceActive) {
      return res.status(403).json({
        message: "Action impossible : la société n'a aucune licence active.",
      });
    }

    const limiteAtteinte =
      societe._count.utilisateur_client >=
      licenceActive.plan.limite_utilisateurs;

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
        statut_id: statut_id ? Number(statut_id) : 1,
        role_id: BigInt(role_id),
        societe_id: societe.id,
        tokenVersion: 1,
      },
      include: {
        role: true,
        statut: true,
      },
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
      return res
        .status(409)
        .json({ message: "Le login ou l'email est déjà utilisé." });
    }

    return res.status(500).json({
      message: "Erreur serveur lors de la création de l'utilisateur.",
      details: error.message,
    });
  }
};

exports.updateUser = async (req, res) => {
  const { uuid } = req.params;
  const {
    login,
    mot_de_passe,
    nom_complet,
    role_id,
    statut_id,
    societe_uuid,
  } = req.body;

  if (!uuid) {
    return res.status(400).json({ message: "L'UUID est requis." });
  }

  try {
    const dataToUpdate = {};

    if (login !== undefined) dataToUpdate.login = login.trim();
    if (nom_complet !== undefined) dataToUpdate.nom_complet = nom_complet.trim();
    if (role_id !== undefined) dataToUpdate.role_id = BigInt(role_id);
    if (statut_id !== undefined) dataToUpdate.statut_id = Number(statut_id);

    if (mot_de_passe && mot_de_passe.trim() !== "") {
      dataToUpdate.mot_de_passe = await bcrypt.hash(mot_de_passe, 10);
    }

    if (societe_uuid !== undefined) {
      if (societe_uuid === null) {
        dataToUpdate.societe_id = null;
      } else {
        const societe = await prisma.societe.findUnique({
          where: { uuid: societe_uuid },
          select: { id: true },
        });
        
        if (!societe) {
          return res.status(404).json({ message: "Société cible introuvable." });
        }
        dataToUpdate.societe_id = societe.id;
      }
    }

    const currentUser = await prisma.utilisateur_client.findUnique({
        where: { uuid },
        select: { role_id: true, societe_id: true }
    });

    if (!currentUser) {
        return res.status(404).json({ message: "Utilisateur non trouvé." });
    }

    const finalRoleId = role_id !== undefined ? Number(role_id) : Number(currentUser.role_id);
    const finalSocieteId = dataToUpdate.societe_id !== undefined ? dataToUpdate.societe_id : currentUser.societe_id;

    if (finalRoleId === 2 && !finalSocieteId) {
      return res.status(403).json({
        message: "Règle métier : Un utilisateur de société (Rôle ID 2) doit impérativement être lié à une société.",
      });
    }

    // 5. Exécution de la mise à jour
    await prisma.utilisateur_client.update({
      where: { uuid: uuid },
      data: dataToUpdate,
    });

    return res.status(200).json({ 
        success: true, 
        message: "Utilisateur mis à jour avec succès." 
    });

  } catch (e) {
    console.error(`Erreur update utilisateur MySQL:`, e);
    
    if (e.code === "P2002") {
        return res.status(409).json({ message: "Ce login ou cet email est déjà utilisé." });
    }
    
    if (e.code === "P2025") {
      return res.status(404).json({ message: "Utilisateur non trouvé lors de la mise à jour." });
    }

    return res.status(500).json({ 
        message: "Erreur serveur lors de la modification.",
        details: e.message 
    });
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
