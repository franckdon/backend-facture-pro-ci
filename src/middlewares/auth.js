const prismaMaster = require("../libs/prisma");
const { verifyToken } = require("../helpers/token");

exports.verifyAdminToken = async (req, res, next) => {
  if (req.method === "OPTIONS") return next();

  const authHeader = req.get("authorization") || "";
  const bearer = authHeader.match(/^Bearer\s+(.+)$/i);
  const token = bearer ? bearer[1].trim() : req.cookies?.admintoken || null;

  if (!token) return res.status(401).json({ message: "Token admin manquant." });

  try {
    const payload = verifyToken(token);
    const adminUUID = payload.uuid || payload.sub;

    if (!adminUUID) throw new Error("UUID absent du token");

    const admin = await prismaMaster.utilisateur_admin.findUnique({
      where: { uuid: adminUUID },
    });

    if (!admin) {
      return res.status(401).json({ message: "Administrateur introuvable." });
    }

    if ((admin.tokenVersion || 0) > (payload.tokenVersion || 0)) {
      return res.status(401).json({ message: "Token révoqué." });
    }

    req.admin = {
      _id: admin.uuid,
      email: admin.email,
      login: admin.login,
      name: admin.nom_complet,
      statut: admin.statut_id,
      double_auth: !!admin.double_auth,
    };

    next();
  } catch (e) {
    console.error("Erreur validation token admin:", e.message);
    return res.status(401).json({ message: "Session invalide ou expirée." });
  }
};
exports.verifyClientToken = async (req, res, next) => {
  if (req.method === "OPTIONS") return next();

  const authHeader = req.get("authorization") || "";
  const bearer = authHeader.match(/^Bearer\s+(.+)$/i);
  const token = bearer
    ? bearer[1].trim()
    : req.cookies?.clienttoken || req.cookies?.admintoken;

  if (!token) {
    return res.status(401).json({ message: "Token client manquant." });
  }

 try {
    const payload = verifyToken(token);
    const clientUUID = payload.uuid || payload.sub;

    const client = await prismaMaster.utilisateur_client.findUnique({
      where: { uuid: clientUUID },
      include: { role: true, societe: true }
    });

    if (!client) return res.status(401).json({ message: "Utilisateur non trouvé." });

    req.user = {
      uuid: client.uuid,
      email: client.email,
      role: client.role?.code, 
      societe_uuid: client.societe?.uuid,
      is_impersonated: payload.is_impersonated || false,
      admin_origin: payload.admin_uuid || null
    };

    next();
  } catch (e) {
    return res.status(401).json({ message: "Session invalide." });
  }
};