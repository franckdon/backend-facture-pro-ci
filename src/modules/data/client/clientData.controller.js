const prisma = require("../../../libs/master"); // ✅ client unique

// helper BigInt déjà utilisé dans ce fichier
const serializeBigInt = (obj) =>
  JSON.parse(JSON.stringify(obj, (key, value) =>
    typeof value === "bigint" ? value.toString() : value
  ));

exports.getAllClientsFNEData = async (req, res) => {
  try {
    const { uuid: userUuid, societe_uuid, societe_id } = req.user; // ✅ societe_id extrait du token

    if (!societe_uuid || !societe_id) {
      return res.status(403).json({ message: "Accès refusé : aucune société rattachée." });
    }

    // ✅ Une seule requête sur le client unique — plus de split master/tenant
    const [societeConfig, stickerInfo, certifiees, nonCertifiees, ventes, avoirs, achats] =
      await Promise.all([
        prisma.societe.findUnique({
          where: { uuid: societe_uuid },
          include: {
            configuration: true,
            etablissement: { include: { point_vente: true } },
            utilisateur_client: { include: { role: true, statut: true } },
          },
        }),
        prisma.sticker.findFirst({
          where: { societe_id: societe_id }, // ✅ corrigé : était societe_uuid (mauvais type)
          orderBy: { date_maj: "desc" },
        }),
        // ✅ Toutes les stats factures filtrées par societe_id
        prisma.entete_facture.count({ where: { societe_id, certifie: 1 } }),
        prisma.entete_facture.count({ where: { societe_id, certifie: 0 } }),
        // ✅ type_facture n'est plus une relation — c'est un code string dans le schéma fusionné
        prisma.entete_facture.count({ where: { societe_id, code_type_facture: "VENTE" } }),
        prisma.entete_facture.count({ where: { societe_id, code_type_facture: "AVOIR" } }),
        prisma.entete_facture.count({ where: { societe_id, code_type_facture: "ACHAT" } }),
      ]);

    if (!societeConfig) return res.status(404).json({ message: "Société introuvable." });

    return res.status(200).json({
      success: true,
      data: {
        utilisateur_connecte: societeConfig.utilisateur_client.find(
          (u) => u.uuid === userUuid
        )?.nom_complet,

        societe_info: {
          id: societeConfig.id.toString(),
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
    const { societe_id } = req.user; // ✅ societe_id au lieu de societe_uuid

    if (!societe_id) {
      return res.status(403).json({ message: "Accès refusé : session incomplète." });
    }

    // ✅ Plus de lookup societe pour récupérer bd_name — on filtre directement
    const invoices = await prisma.entete_facture.findMany({
      where: { societe_id }, // 🔑 filtre tenant
      include: {
        tiers: { select: { raison_sociale_tiers: true, ncc_tiers: true } },
        detail_facture: false, // on utilise _count uniquement
        _count: { select: { detail_facture: true } },
      },
      orderBy: { date_facture: "desc" },
    });

    // ✅ type_facture, type_facturation, mode_paiement, devise sont des codes string
    //    dans le schéma fusionné — plus de relations à inclure
    const formattedInvoices = invoices.map((invoice) => ({
      ...invoice,
      nb_lignes: invoice._count?.detail_facture || 0,
      is_certified: invoice.certifie === 1,
    }));

    return res.status(200).json({
      success: true,
      count: formattedInvoices.length,
      data: serializeBigInt(formattedInvoices),
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

    const societeInfo = await prisma.societe.findUnique({
      where: { uuid: societe_uuid },
      include: {
        utilisateur_client: { include: { role: true, statut: true } },
        etablissement: { include: { point_vente: true } },
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
        libelle: societeInfo.raison_sociale_societe, // ✅ libelle_societe n'existe pas dans le schéma
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