const prisma = require('../../libs/master');

exports.getAllRoles = async (req, res) => {
  try {
    const roles = await prisma.role.findMany();

    const safeRoles = JSON.parse(
      JSON.stringify(roles, (key, value) =>
        typeof value === "bigint" ? value.toString() : value
      )
    );

    res.status(200).json({
      success: true,
      message: "Rôles récupérés avec succès",
      roles: safeRoles,
    });
  } catch (err) {
    console.error("Erreur getAllRoles MySQL:", err.message);
    res.status(500).json({ 
      message: "Erreur serveur.", 
      error: err.message 
    });
  }
};

exports.createRole = async (req, res) => {
  const { code, libelle } = req.body;

  if (!code) return res.status(400).json({ message: "Le code du rôle est requis." });

  try {
    const newRole = await prisma.role.create({
      data: {
        code: code.toUpperCase(),
        libelle: libelle || code,
      },
    });

    res.status(201).json({
      success: true,
      message: "Rôle créé avec succès.",
      role: newRole,
    });
  } catch (err) {
    if (err.code === "P2002") {
      return res.status(400).json({ message: "Ce code de rôle existe déjà." });
    }
    res.status(500).json({ message: "Erreur serveur.", error: err.message });
  }
};

exports.deleteRole = async (req, res) => {
  const { uuid } = req.params;

  try {
    const role = await prisma.role.findUnique({ where: { uuid: uuid } });
    if (["ADMIN", "COMPTABLE", "AUDITEUR"].includes(role?.code)) {
      return res.status(403).json({ message: "Impossible de supprimer un rôle système." });
    }

    await prisma.role.delete({ where: { uuid: uuid  } });

    res.status(200).json({ success: true, message: "Rôle supprimé." });
  } catch (err) {
    res.status(500).json({ message: "Erreur lors de la suppression.", error: err.message });
  }
};

exports.setupDefaultRoles = async (req, res) => {
  const defaultRoles = [
    { 
      code: "ADMIN", 
      description: "Accès total. Gestion des utilisateurs, de la configuration société et des points de vente." 
    },
    { 
      code: "COMPTABLE", 
      description: "Gestion des factures, avoirs et rapports financiers. Accès limité aux paramètres techniques." 
    },
    { 
      code: "AUDITEUR", 
      description: "Consultation uniquement. Peut visualiser les factures et les statistiques sans droit de modification." 
    },
  ];

  try {
    const results = await Promise.all(
      defaultRoles.map((role) =>
        prisma.role.upsert({
          where: { code: role.code }, 
          update: { description: role.description }, 
          create: {
            code: role.code,
            description: role.description,
          },
        })
      )
    );

    res.status(200).json({
      success: true,
      message: "Rôles par défaut initialisés avec succès.",
      data: results,
    });
  } catch (err) {
    console.error("Erreur Setup Roles:", err.message);
    res.status(500).json({ message: "Erreur lors de l'initialisation des rôles." });
  }
};