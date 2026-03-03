const { generateLicenseToken, slugify } = require("../../helpers/params");
const prisma = require("../../libs/master"); // ✅ client unique
const crypto = require("crypto");

const generateApiToken = () => {
  return crypto.randomBytes(24).toString("hex");
};

exports.createCompany = async (req, res) => {
  const {
    raison_sociale_societe,
    ncc,
    rccm,
    adresse,
    telephone,
    email,
    cle_api_fne,
    plan_id,
  } = req.body;

  if (!raison_sociale_societe || !ncc || !plan_id) {
    return res.status(400).json({
      message: "Données incomplètes (libellé et NCC requis).",
    });
  }

  const slug = slugify(raison_sociale_societe);

  try {
    const plan = await prisma.plan.findUnique({
      where: { id: parseInt(plan_id) },
    });
    if (!plan)
      return res.status(404).json({ message: "Le plan de souscription sélectionné n'existe pas." });

    const uniqueSuffix = Math.floor(1000 + Math.random() * 9000);

    // ✅ Plus de création de base de données — tout est dans la BD unique
    const result = await prisma.$transaction(async (tx) => {
      const newSociete = await tx.societe.create({
        data: {
          code_societe: `${slug.toUpperCase()}-${uniqueSuffix}`,
          raison_sociale_societe,
          ncc,
          rccm,
          adresse,
          telephone,
          email,
          statut_id: 1,
          // ✅ bd_host, bd_name, bd_user, bd_pass, bd_port supprimés
        },
      });

      const dateExpiration = new Date();
      dateExpiration.setFullYear(dateExpiration.getFullYear() + 1);

      await tx.licence.create({
        data: {
          societe_id: newSociete.id,
          plan_id: plan.id,
          cle: generateLicenseToken(newSociete.uuid),
          date_expiration: dateExpiration,
          statut_id: 1,
        },
      });

      await tx.configuration.create({
        data: {
          societe_id: newSociete.id,
          cle_api_fne: cle_api_fne || null,
          cle_api_locale: generateApiToken(),
          production: 0,
        },
      });

      return newSociete;
    });

    return res.status(201).json({
      success: true,
      message: `Société créée avec le plan ${plan.libelle}.`,
      data: { code: result.code_societe, licence_cle: "Générée avec succès" },
    });
  } catch (err) {
    console.error("ERREUR CREATION SOCIETE:", err);
    // ✅ Plus de rollback DROP DATABASE à gérer
    return res.status(500).json({
      message: "Échec de la création de la société.",
      error: err.message,
    });
  }
};

exports.updateCompany = async (req, res) => {
  const { uuid } = req.params;
  const data = req.body;

  if (!uuid) {
    return res.status(400).json({ message: "L'identifiant (UUID) de la société est requis." });
  }

  try {
    const result = await prisma.$transaction(async (tx) => {
      const updatedSociete = await tx.societe.update({
        where: { uuid: uuid },
        data: {
          raison_sociale_societe: data.libelle_societe,
          ncc: data.ncc,
          rccm: data.rccm,
          regime_imposition: data.regime_imposition,
          centre_impot: data.centre_impot,
          ref_bancaire: data.ref_bancaire,
          adresse: data.adresse,
          telephone: data.telephone,
          email: data.email,
          modifie_le: new Date(),
        },
      });

      if (data.cle_api_fne !== undefined || data.statut_production !== undefined) {
        await tx.configuration.update({
          where: { societe_id: updatedSociete.id },
          data: {
            cle_api_fne: data.cle_api_fne,
            production: data.statut_production === true ? 1 : 0,
          },
        });
      }

      return updatedSociete;
    });

    res.status(200).json({
      message: "Société et configuration mises à jour avec succès.",
      uuid: result.uuid,
    });
  } catch (e) {
    console.error(`Erreur modification société (UUID: ${uuid}):`, e);
    if (e.code === "P2025") {
      return res.status(404).json({ message: "Société ou configuration non trouvée." });
    }
    res.status(500).json({ message: "Erreur lors de la mise à jour.", error: e.message });
  }
};

exports.deleteCompany = async (req, res) => {
  const { uuid } = req.params;

  if (!uuid) return res.status(400).json({ message: "L'UUID est requis." });

  try {
    const societe = await prisma.societe.findUnique({
      where: { uuid: uuid },
      select: { id: true },
      // ✅ bd_name supprimé du select, plus besoin
    });

    if (!societe) return res.status(404).json({ message: "Société non trouvée." });

    // ✅ La transaction suffit — le onDelete: Cascade du schéma gère les suppressions
    //    en cascade automatiquement (licences, configuration, etablissements,
    //    utilisateurs, ET toutes les données tenant : factures, tiers, produits...)
    await prisma.societe.delete({ where: { id: societe.id } });

    // ✅ Plus de DROP DATABASE

    return res.status(200).json({
      message: "La société et toutes ses données ont été supprimées.",
    });
  } catch (e) {
    console.error("Erreur critique suppression:", e);
    res.status(500).json({ message: "Erreur serveur.", error: e.message });
  }
};

// updateCompanyStatusProduction — inchangé ✅
exports.updateCompanyStatusProduction = async (req, res) => {
  const { in_production, cle_api_fne, societe_uuid } = req.body;

  try {
    if (!societe_uuid) {
      return res.status(400).json({ message: "L'UUID de la société est requis." });
    }

    const societe = await prisma.societe.findUnique({
      where: { uuid: societe_uuid },
      select: { id: true },
    });

    if (!societe) {
      return res.status(404).json({ message: "Société non trouvée." });
    }

    const updateData = {};
    if (in_production !== undefined) updateData.production = in_production ? 1 : 0;
    if (cle_api_fne !== undefined) updateData.cle_api_fne = cle_api_fne;

    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({ message: "Aucune donnée à mettre à jour." });
    }

    const config = await prisma.configuration.upsert({
      where: { societe_id: societe.id },
      update: updateData,
      create: {
        societe_id: societe.id,
        ...updateData,
        cle_api_locale: crypto.randomBytes(24).toString("hex"),
      },
    });

    const safeConfig = JSON.parse(
      JSON.stringify(config, (key, value) =>
        typeof value === "bigint" ? value.toString() : value,
      ),
    );

    return res.status(200).json({
      message: "Statut de production et token FNE mis à jour avec succès.",
      data: safeConfig,
    });
  } catch (error) {
    console.error("Erreur updateStatusProduction:", error);
    return res.status(500).json({ message: "Erreur serveur.", details: error.message });
  }
};

// updateCompanyStatus — inchangé ✅
exports.updateCompanyStatus = async (req, res) => {
  const { societe_uuid, code_statut } = req.body;

  if (!societe_uuid || !code_statut) {
    return res.status(400).json({ message: "UUID de société et code statut requis." });
  }

  try {
    const targetStatus = await prisma.statut.findUnique({
      where: { code: code_statut.toUpperCase() },
    });

    if (!targetStatus) {
      return res.status(404).json({ message: "Le statut spécifié est invalide." });
    }

    const updatedSociete = await prisma.societe.update({
      where: { uuid: societe_uuid },
      data: { statut_id: targetStatus.id, modifie_le: new Date() },
      select: {
        uuid: true,
        raison_sociale_societe: true,
        statut: { select: { code: true, description: true } },
      },
    });

    return res.status(200).json({
      success: true,
      message: `La société est désormais : ${code_statut}`,
      data: updatedSociete,
    });
  } catch (error) {
    console.error("Erreur updateCompanyStatus:", error);
    if (error.code === "P2025") {
      return res.status(404).json({ message: "Société introuvable." });
    }
    return res.status(500).json({ message: "Erreur serveur lors du changement de statut." });
  }
};