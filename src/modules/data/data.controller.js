const { getTenantClient } = require("../../libs/tenant");
const prismaMaster = require("../../libs/master");

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
        licence: true,
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
      message: `Liste complète des clients FNE récupérée.`,
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

exports.getTenantDashboardData = async (req, res) => {
  try {
    const { uuid: userUuid, societe_uuid } = req.user;

    if (!societe_uuid) {
      return res.status(403).json({
        message: "Accès refusé : aucune société rattachée à votre compte.",
      });
    }

    const societeConfig = await prismaMaster.societe.findUnique({
      where: { uuid: societe_uuid },
      include: {
        configuration: true,
        sticker: true,
        licence: {
          include: { statut: true, plan: true },
          where: { statut: { code: "ACTIF" } },
        },
        etablissement: {
          include: { point_vente: true },
        },
        utilisateur_client: {
          include: { role: true, statut: true },
        },
      },
    });

    if (!societeConfig) {
      return res
        .status(404)
        .json({ message: "Société introuvable dans le registre master." });
    }

    const tenantPrisma = getTenantClient({
      bd_name: societeConfig.bd_name,
      bd_host: societeConfig.bd_host,
      bd_user: societeConfig.bd_user,
      bd_pass: societeConfig.bd_pass,
      bd_port: societeConfig.bd_port,
    });

    const [certifiees, nonCertifiees, ventes, avoirs, achats] =
      await Promise.all([
        tenantPrisma.entete_facture.count({ where: { certifie: 1 } }),
        tenantPrisma.entete_facture.count({ where: { certifie: 0 } }),
        tenantPrisma.entete_facture.count({
          where: { code_type_facture: "VENTE" },
        }),
        tenantPrisma.entete_facture.count({
          where: { code_type_facture: "AVOIR" },
        }),
        tenantPrisma.entete_facture.count({
          where: { code_type_facture: "ACHAT" },
        }),
      ]);

    return res.status(200).json({
      success: true,
      data: {
        utilisateur_connecte: societeConfig.utilisateur_client.find(
          (u) => u.uuid === userUuid,
        )?.nom_complet,

        societe_info: {
          id: societeConfig.id,
          uuid: societeConfig.uuid,
          nom: societeConfig.raison_sociale_societe,
          ncc: societeConfig.ncc,
          rccm: societeConfig.rccm,
          adresse: societeConfig.adresse,
          logo: societeConfig.logo_url,
          cle_api_locale: societeConfig.configuration?.cle_api_locale || "",
          cle_api_fne: societeConfig.configuration?.cle_api_fne || "",
          production: societeConfig.configuration?.production === 1,
        },

        etablissements: societeConfig.etablissement.map((e) => ({
          uuid: e.uuid,
          code: e.code_etablissement,
          nom: e.libelle_etablissement,
          points_vente: e.point_vente.map((pdv) => ({
            uuid: pdv.uuid,
            nom: pdv.libelle_pdv,
          })),
        })),

        utilisateurs_liste: societeConfig.utilisateur_client.map((u) => ({
          uuid: u.uuid,
          login: u.login,
          nom: u.nom_complet,
          email: u.email,
          role: u.role?.code || "Utilisateur",
          statut: u.statut?.code || "Actif",
        })),

        statistiques: {
          factures_certifiees: certifiees,
          factures_non_certifiees: nonCertifiees,
          total_ventes: ventes,
          total_achats: achats,
          total_avoirs: avoirs,
          balance_stickers: societeConfig.sticker?.balance_sticker || 0,
          plan_actuel: societeConfig.licence?.plan?.libelle || "Aucun plan",
        },
      },
    });
  } catch (error) {
    console.error("Erreur Dashboard Tenant:", error);
    res.status(500).json({
      message: "Erreur lors de la génération du dashboard.",
      details: error.message,
    });
  }
};
