const masterPrisma = require("../../libs/master");

exports.getAllFaqs = async (req, res) => {
  try {
    const { onlyActive } = req.query;
    const faqs = await masterPrisma.faq.findMany({
      where: onlyActive === "true" ? { est_actif: true } : {},
      orderBy: { ordre: "asc" },
    });
    res.json({ success: true, data: faqs });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.createFaq = async (req, res) => {
  try {
    const { question, reponse, ordre, est_actif } = req.body;
    const newFaq = await masterPrisma.faq.create({
      data: { question, reponse, ordre: parseInt(ordre) || 0, est_actif },
    });
    res.status(201).json({ success: true, data: newFaq });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.updateFaq = async (req, res) => {
  try {
    const { uuid } = req.params;
    const { question, reponse, ordre, est_actif } = req.body;
    const updatedFaq = await masterPrisma.faq.update({
      where: { uuid },
      data: { question, reponse, ordre, est_actif },
    });
    res.json({ success: true, data: updatedFaq });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.deleteFaq = async (req, res) => {
  try {
    const { uuid } = req.params;
    await masterPrisma.faq.delete({ where: { uuid } });
    res.json({ success: true, message: "FAQ supprimée avec succès" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};