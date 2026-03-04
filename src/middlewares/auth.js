const prisma = require("../libs/master"); // ✅ client unique
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

    const admin = await prisma.utilisateur_admin.findUnique({
      where: { uuid: adminUUID },
    });

    if (!admin) {
      return res.status(401).json({ message: "Administrateur introuvable." });
    }

    if ((admin.tokenVersion || 0) > (payload.tokenVersion || 0)) {
      return res.status(401).json({ message: "Token révoqué." });
    }

    req.admin = {
      uuid: admin.uuid,
      email: admin.email,
      login: admin.login,
      name: admin.nom_complet,
      statut: admin.statut_id,
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

    if (payload.is_admin === true) {
      return res
        .status(401)
        .json({ message: "Token invalide pour cet accès." });
    }

    const clientUUID = payload.uuid || payload.sub;

    const client = await prisma.utilisateur_client.findUnique({
      where: { uuid: clientUUID },
      include: { role: true, societe: true },
    });

    if (!client)
      return res.status(401).json({ message: "Utilisateur non trouvé." });

    if ((client.tokenVersion || 0) > (payload.tokenVersion || 0)) {
      return res.status(401).json({ message: "Token révoqué." });
    }

    req.user = {
      uuid: client.uuid,
      email: client.email,
      role: client.role?.code,
      societe_uuid: client.societe?.uuid,
      societe_id: client.societe?.id,
      code_societe: client.societe?.code_societe,
      is_impersonated: payload.is_impersonated || false,
        };

    next();
  } catch (e) {
    return res.status(401).json({ message: "Session invalide." });
  }
};
