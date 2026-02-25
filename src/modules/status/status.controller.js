const prisma = require('../../libs/master');

exports.getAllStatuses = async (req, res) => {
  try {
    const statuts = await prisma.statut.findMany();

    const safeStatuts = JSON.parse(
      JSON.stringify(statuts, (key, value) =>
        typeof value === "bigint" ? value.toString() : value
      )
    );

    res.status(200).json({
      success: true,
      message: "Statuts récupérés avec succès",
      statuts: safeStatuts,
    });
  } catch (err) {
    console.error("Erreur getAllStatuses MySQL:", err.message);
    res.status(500).json({ 
      message: "Erreur serveur.", 
      error: err.message 
    });
  }
};

exports.setupDefaultStatuses = async (req, res) => {
  const defaultStatuses = [
    { id: 1, code: "ACTIF", description: "Entité opérationnelle et autorisée." },
    { id: 2, code: "INACTIF", description: "Entité désactivée temporairement." },
    { id: 3, code: "SUSPENDU", description: "Accès bloqué pour impayé ou violation des conditions." },
  ];

  try {
    const results = await Promise.all(
      defaultStatuses.map((s) =>
        prisma.statut.upsert({
          where: { code: s.code },
          update: { description: s.description }, 
          create: s,
        })
      )
    );

    res.status(200).json({
      success: true,
      message: "Statuts initialisés avec succès (Actif, Inactif, Suspendu).",
      data: results,
    });
  } catch (err) {
    console.error("Erreur Setup Statuts:", err.message);
    res.status(500).json({ message: "Erreur lors de l'initialisation des statuts." });
  }
};