const { getTenantClient } = require("../../../libs/tenant");
const prismaMaster = require("../../../libs/master");

exports.getAllClientsFNEData = async (req, res) => {
  try {
    const { uuid: userUuid, societe_uuid } = req.user;

    if (!societe_uuid) {
      return res.status(403).json({ message: "Accès refusé : aucune société rattachée." });
    }

    // 1. Récupération des données Master
    const [societeConfig, stickerInfo] = await Promise.all([
      prismaMaster.societe.findUnique({
        where: { uuid: societe_uuid },
        include: {
          configuration: true,
          etablissement: {
            include: { point_vente: true },
          },
          utilisateur_client: {
            include: { role: true, statut: true },
          },
        },
      }),
      prismaMaster.sticker.findFirst({ 
        where: { societe_id: societe_uuid }, 
        orderBy: { date_maj: "desc" } 
      }),
    ]);

    if (!societeConfig) return res.status(404).json({ message: "Société introuvable." });

    const tenantPrisma = getTenantClient({
      bd_name: societeConfig.bd_name,
      bd_user: societeConfig.bd_user,
      bd_pass: societeConfig.bd_pass,
    });

    const [certifiees, nonCertifiees, ventes, avoirs, achats] = await Promise.all([
      tenantPrisma.entete_facture.count({ where: { certifie: 1 } }),
      tenantPrisma.entete_facture.count({ where: { certifie: 0 } }),
      tenantPrisma.entete_facture.count({ where: { type_facture: { code_type_facture: "VENTE" } } }),
      tenantPrisma.entete_facture.count({ where: { type_facture: { code_type_facture: "AVOIR" } } }),
      tenantPrisma.entete_facture.count({ where: { type_facture: { code_type_facture: "ACHAT" } } }),
    ]);

    return res.status(200).json({
      success: true,
      data: {
        utilisateur_connecte: societeConfig.utilisateur_client.find(
          (u) => u.uuid === userUuid
        )?.nom_complet,

        societe_info: {
          id: societeConfig.id.toString(), // BigInt to String
          uuid: societeConfig.uuid,
          nom: societeConfig.raison_sociale_societe, // Nom correct du champ
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
          role: u.role?.code || "N/A", 
          statut: u.statut?.code || "ACTIF",
        })),

        statistiques: {
          factures_certifiees: certifiees,
          factures_non_certifiees: nonCertifiees,
          total_ventes: ventes,
          total_achats: achats,
          total_avoirs: avoirs,
          balance_stickers: stickerInfo?.balance_sticker || 0,
        },
      },
    });
  } catch (error) {
    console.error("Erreur getAllClientsFNEInfo:", error);
    res.status(500).json({ message: "Erreur serveur", details: error.message });
  }
};

exports.getAllInvoicesData = async (req, res) => {
  try {
    const { societe_uuid } = req.user;

    if (!societe_uuid) {
      return res.status(403).json({ message: "Accès refusé : session incomplète." });
    }

    const societeConfig = await prismaMaster.societe.findUnique({
      where: { uuid: societe_uuid },
      select: { bd_name: true, bd_user: true, bd_pass: true },
    });

    if (!societeConfig?.bd_name) {
      return res.status(404).json({ message: "Configuration DB introuvable." });
    }

    const tenantPrisma = getTenantClient({
      bd_name: societeConfig.bd_name,
      bd_user: societeConfig.bd_user,
      bd_pass: societeConfig.bd_pass,
    });

    const invoices = await tenantPrisma.entete_facture.findMany({
      include: {
        tiers: { select: { raison_sociale_tiers: true, ncc_tiers: true } }, 
        type_facture: true,
        type_facturation: true,
        mode_paiement: true,
        devise: true,
        _count: {
          select: { detail_facture: true }
        }
      },
      orderBy: { date_facture: "desc" },
    });

    const formattedInvoices = invoices.map((invoice) => ({
      ...invoice,
      nb_lignes: invoice._count?.detail_facture || 0,
      is_certified: invoice.certifie === 1
    }));

    return res.status(200).json({
      success: true,
      count: formattedInvoices.length,
      data: JSON.parse(
        JSON.stringify(formattedInvoices, (key, value) =>
          typeof value === "bigint" ? value.toString() : value
        )
      ),
    });
  } catch (error) {
    console.error("Erreur getAllInvoicesData:", error);
    return res.status(500).json({
      message: "Erreur lors de la récupération des factures.",
      details: error.message,
    });
  }
};

exports.getCompanyClientFullData = async (req, res) => {
  try {
    const { societe_uuid } = req.user;

    if (!societe_uuid) {
      return res.status(403).json({
        message: "Accès refusé. Aucune société associée à votre session.",
      });
    }

    const societeInfo = await prismaMaster.societe.findUnique({
      where: { uuid: societe_uuid },
      include: {
        utilisateur_client: {
          include: {
            role: true,
            statut: true,
          },
        },
        etablissement: {
          include: {
            point_vente: true,
          },
        },
        configuration: true,
      },
    });

    if (!societeInfo) {
      return res.status(404).json({ message: "Informations société introuvables." });
    }

    const responseData = {
      details: {
        uuid: societeInfo.uuid,
        code: societeInfo.code_societe,
        libelle: societeInfo.raison_sociale_societe || societeInfo.libelle_societe, 
        ncc: societeInfo.ncc,
        rccm: societeInfo.rccm,
        coordonnees: {
          adresse: societeInfo.adresse,
          telephone: societeInfo.telephone,
          email: societeInfo.email,
          logo: societeInfo.logo_url,
        },
        fiscalite: {
          regime: societeInfo.regime_imposition,
          centre_impot: societeInfo.centre_impot,
        },
      },
      utilisateurs: societeInfo.utilisateur_client.map((u) => {
        const { mot_de_passe, otp_secret, tokenVersion, ...safeUser } = u;
        return safeUser;
      }),
      etablissements: societeInfo.etablissement,
      configuration: societeInfo.configuration,
    };

    return res.status(200).json({
      success: true,
      data: serializeBigInt(responseData),
    });
  } catch (error) {
    console.error("Erreur GetFullSocieteInfo:", error);
    return res.status(500).json({
      message: "Erreur lors de la récupération des données de la société.",
      details: error.message,
    });
  }
};