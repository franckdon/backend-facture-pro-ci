const prisma = require("../../libs/master");

exports.updateCompanyLicenseStatus = async (req, res) => {
  const { societe_uuid, statut } = req.body;

  if (!societe_uuid || typeof statut === "undefined") {
    return res.status(400).json({
      message: "L'UUID de la société et le statut sont requis.",
    });
  }

  try {
    const company = await prisma.societe.findUnique({
      where: { uuid: societe_uuid },
      select: { id: true },
    });

    if (!company) {
      return res.status(404).json({ message: "Société introuvable." });
    }

    const statusCode = statut === true ? "ACTIF" : "INACTIF";
    const targetStatus = await prisma.statut.findUnique({
      where: { code: statusCode },
    });

    if (!targetStatus) {
      return res.status(500).json({ message: `Le statut '${statusCode}' n'est pas configuré en base.` });
    }


    const updateResult = await prisma.licence.updateMany({
      where: {
        societe_id: company.id,
      },
      data: {
        statut_id: targetStatus.id,
      },
    });

    if (updateResult.count === 0) {
      return res.status(404).json({
        message: "Aucune licence trouvée pour cette société.",
      });
    }

    res.status(200).json({
      message: `Licence(s) mise(s) à jour avec succès.`,
      data: {
        societe_uuid: societe_uuid,
        statut: statusCode,
        licences_impactees: updateResult.count
      },
    });
  } catch (e) {
    console.error(`Erreur mise à jour licence :`, e);
    res.status(500).json({ message: "Erreur serveur lors de la mise à jour." });
  }
};

exports.checkAndDeactivateExpiredLicenses = async (req, res) => {
  try {
    const result = await prisma.$transaction(async (tx) => {
      const activeStatus = await tx.statut.findUnique({ where: { code: "ACTIF" } });
      const inactiveStatus = await tx.statut.findUnique({ where: { code: "INACTIF" } });

      if (!activeStatus || !inactiveStatus) {
        throw new Error("Les codes de statut 'ACTIVE' ou 'INACTIVE' sont manquants en base.");
      }

      const now = new Date();

      const expiredLicenses = await tx.licence.findMany({
        where: {
          date_expiration: { lt: now },
          statut_id: activeStatus.id, 
        },
        select: {
          societe: {
            select: {
              uuid: true,
              raison_sociale_societe: true,
            },
          },
        },
      });

      const deactivatedSocieteUuids = expiredLicenses.map(
        (l) => l.societe.uuid
      );

      const updateBatch = await tx.licence.updateMany({
        where: {
          date_expiration: { lt: now },
          statut_id: activeStatus.id,
        },
        data: {
          statut_id: inactiveStatus.id,
        },
      });

      return {
        count: updateBatch.count,
        uuids: deactivatedSocieteUuids,
      };
    });

    if (result.count > 0) {
      console.log(
        `[AUTO-TASK] : ${result.count} licences expirées désactivées. Sociétés concernées :`,
        result.uuids.join(", ")
      );
    }

    return res.status(200).json({
      message: "Vérification et désactivation des licences expirées terminée.",
      count_deactivated: result.count,
      deactivated_societe_uuids: result.uuids,
    });
  } catch (e) {
    console.error("Erreur critique tâche automatique Prisma :", e);
    return res.status(500).json({
      message: "Erreur lors de l'exécution de la tâche de désactivation.",
      error: e.message,
    });
  }
};