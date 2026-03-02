const prismaMaster = require("../../../libs/master");

exports.getAdminDashboardData = async (req, res) => {
  try {
    const [totalClients, totalUsers, totalLicencesActive] = await Promise.all([
      prismaMaster.societe.count(),
      prismaMaster.utilisateur_client.count(),
      prismaMaster.licence.count({
        where: { statut_id: 1 },
      }),
    ]);

    res.status(200).json({
      message: "Statistiques globales récupérées avec succès.",
      stats: {
        clients_fne: totalClients,
        utilisateurs_client: totalUsers,
        licences_actives: totalLicencesActive,
      },
    });
  } catch (e) {
    console.error("Erreur stats globales MySQL:", e);
    res.status(500).json({
      message: "Erreur lors de la récupération des statistiques.",
      error: e.message,
    });
  }
};

exports.getCompaniesFullData = async (req, res) => {
  try {
    const clients = await prismaMaster.societe.findMany({
      include: {
        configuration: true,
        statut: true,
        licences: true,
        utilisateur_client: {
          select: {
            uuid: true,
            login: true,
            email: true,
            nom_complet: true,
            statut_id: true,
          },
        },
      },
    });

    const safeData = JSON.parse(
      JSON.stringify(clients, (key, value) =>
        typeof value === "bigint" ? value.toString() : value,
      ),
    );

    return res.status(200).json({
      success: true,
      message: `Liste complète des clients récupérée.`,
      data: safeData,
    });
  } catch (e) {
    console.error("Erreur getAllClientDataFNE MySQL:", e);
    return res.status(500).json({
      message: "Erreur lors de la récupération des données clients.",
      error: e.message,
    });
  }
};