const prisma = require('../../../libs/master');
exports.getAdminInfo = async (req, res) => {
  const adminId = req.admin._id; 

  if (!adminId) {
    return res.status(401).json({ 
      message: "Non autorisé: ID administrateur manquant." 
    });
  }

  try {
    const user = await prisma.utilisateur_admin.findUnique({
      where: { 
        id: Number(adminId) 
      },
      select: {
        uuid: true, 
        login: true,
        email: true,
        nom_complet: true,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "Administrateur introuvable." });
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (err) {
    console.error("Erreur getAdminInfo MySQL:", err.message);
    res.status(500).json({ 
      message: "Erreur serveur.", 
      error: err.message 
    });
  }
};