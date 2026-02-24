const prisma = require("../../libs/master")

exports.getAllPlans = async (req, res) => {
  try {
    const plans = await prisma.plan.findMany();

    const safePlans = JSON.parse(
      JSON.stringify(plans, (key, value) =>
        typeof value === "bigint" ? value.toString() : value
      )
    );

    res.status(200).json({
      success: true,
      message: "Plans récupérés avec succès",
      plans: safePlans,
    });
  } catch (err) {
    console.error("Erreur getAllPlans MySQL:", err.message);
    res.status(500).json({ 
      message: "Erreur serveur.", 
      error: err.message 
    });
  }
};

exports.setupDefaultPlans = async (req, res) => {
  const defaultPlans = [
    {
      code: "BASIC",
      libelle: "Plan Basique",
      prix_mensuel: 550000,
      limite_utilisateurs: 2,
      description: "Idéal pour les auto-entrepreneurs et petites boutiques."
    },
    {
      code: "PREMIUM",
      libelle: "Plan Premium",
      prix_mensuel: 850000,
      limite_utilisateurs: 3,
      description: "Pour les PME en pleine croissance avec plusieurs points de vente."
    },
    {
      code: "ENTERPRISE",
      libelle: "Plan Entreprise",
      prix_mensuel: 1500000,
      limite_utilisateurs: 5,
      description: "Solution complète pour les grandes entreprises avec gros volumes."
    }
  ];

  try {
    const results = await Promise.all(
      defaultPlans.map((p) =>
        prisma.plan.upsert({
          where: { code: p.code },
          update: p, 
          create: p,
        })
      )
    );

    res.status(200).json({ success: true, message: "Plans initialisés.", data: results });
  } catch (err) {
    res.status(500).json({ message: "Erreur lors du setup des plans.", error: err.message });
  }
};

exports.createPlan = async (req, res) => {
  const { libelle, code, prix_annuel, limite_utilisateurs, description } = req.body;

  try {
    const newPlan = await prisma.plan.create({
      data: {
        libelle,
        code: code.toUpperCase(),
        prix_annuel,
        limite_utilisateurs: parseInt(limite_utilisateurs),
        description
      }
    });

    res.status(201).json({ success: true, plan: newPlan });
  } catch (err) {
    if (err.code === 'P2002') return res.status(400).json({ message: "Ce code de plan existe déjà." });
    res.status(500).json({ message: "Erreur serveur.", error: err.message });
  }
};

exports.updatePlan = async (req, res) => {
  const { uuid } = req.params;
  const data = req.body;

  try {
    const updatedPlan = await prisma.plan.update({
      where: { uuid: uuid },
      data: {
        libelle: data.libelle,
        prix_annuel: data.prix_annuel,
        limite_utilisateurs: data.limite_utilisateurs ? parseInt(data.limite_utilisateurs) : undefined,
        description: data.description
      }
    });

    res.status(200).json({ success: true, plan: updatedPlan });
  } catch (err) {
    res.status(500).json({ message: "Erreur lors de la modification.", error: err.message });
  }
};

exports.deletePlan = async (req, res) => {
  const { uuid } = req.params;

  try {
    const checkUsage = await prisma.licence.count({
      where: { plan: { uuid: uuid } }
    });

    if (checkUsage > 0) {
      return res.status(400).json({ 
        message: "Impossible de supprimer ce plan : il est utilisé par des sociétés actives." 
      });
    }

    await prisma.plan.delete({ where: { uuid: uuid } });
    res.status(200).json({ success: true, message: "Plan supprimé avec succès." });
  } catch (err) {
    res.status(500).json({ message: "Erreur lors de la suppression.", error: err.message });
  }
};