const bcrypt = require("bcrypt");
const { signAccessToken, signRefreshToken } = require("../../../helpers/token");
const { makeToken, hashToken } = require("../../../helpers/token");
const { sendMail } = require("../../../helpers/mailer");
const prisma = require("../../../libs/master");
const env = require("../../../configs/env");
const { bcryptCost, registrationExpiryMinutes, resetExpiryMinutes } = env.otp;
const { url } = env.frontend;

const BCRYPT_ROUNDS = parseInt(bcryptCost, 10) || 12;

exports.loginAdmin = async (req, res) => {
  const { login, password } = req.body;

  const cleanBigInt = (obj) => {
    return JSON.parse(
      JSON.stringify(obj, (key, value) =>
        typeof value === "bigint" ? value.toString() : value,
      ),
    );
  };

  if (!login || !password) {
    return res.status(400).json({ message: "Login et mot de passe requis." });
  }

  try {
    const user = await prisma.utilisateur_admin.findFirst({
      where: { login: login },
    });

    if (!user) {
      return res.status(401).json({ message: "Identifiants invalides." });
    }

    const isMatch = await bcrypt.compare(password, user.mot_de_passe);
    if (!isMatch) {
      return res
        .status(401)
        .json({ message: "Mot de passe incorrect. Veuillez réessayer." });
    }

    await prisma.utilisateur_admin.update({
      where: { id: user.id },
      data: { dernier_login: new Date() },
    });

    const payload = {
      uuid: user.uuid,
      email: user.email,
      name: user.nom_complet,
      is_admin: true,
      tokenVersion: user.tokenVersion || 0,
    };
    const token = signAccessToken(payload);
    const refreshToken = signRefreshToken(payload);

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    const userResponse = cleanBigInt({
      uuid: user.uuid,
      email: user.email,
      name: user.nom_complet,
      is_admin: true,
    });

    return res.status(200).json({
      message: "Connexion admin réussie.",
      token,
      user: userResponse,
    });
  } catch (e) {
    console.error("Erreur loginAdmin:", e);
    return res.status(500).json({
      message: "Erreur serveur lors de la connexion.",
      error: e.message,
    });
  }
};

exports.forgotPasswordAdmin = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "L'email est requis." });
  }

  try {
    const user = await prisma.utilisateur_admin.findUnique({
      where: { email: email },
      select: {
        id: true,
        uuid: true,
      },
    });

    if (!user) {
      return res.status(200).json({
        message:
          "Si cet email existe, un lien de réinitialisation a été envoyé.",
      });
    }

    const resetTokenBrut = makeToken(32);
    const resetTokenHash = hashToken(resetTokenBrut);

    const expiryMinutes = parseInt(resetExpiryMinutes, 10) || 60;
    const resetExpires = new Date(Date.now() + expiryMinutes * 60 * 1000);

    await prisma.utilisateur_admin.update({
      where: { id: user.id },
      data: {
        verification_token: resetTokenHash,
        verification_expiration: resetExpires,
      },
    });

    const resetURL = `${url}/admin/reset-password/confirm?token=${resetTokenBrut}&identifier=${user.uuid}&admin=true`;

    await sendMail({
      to: email,
      subject: "Réinitialisation de votre mot de passe Administrateur FNE",
      html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: auto;">
                <h2 style="color: #284485;">Réinitialisation de mot de passe</h2>
                <p>Vous avez demandé la réinitialisation de votre accès Administrateur.</p>
                <p>Cliquer sur le bouton ci-dessous pour définir un nouveau mot de passe. Ce lien est valable <strong>${expiryMinutes} minutes</strong> :</p>
                <div style="text-align: center; margin: 30px 0;">
                  <a href="${resetURL}" style="background-color: #284485; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;">
                      Réinitialiser mon mot de passe
                  </a>
                </div>
                <p style="font-size: 12px; color: #666;">Si vous n'êtes pas à l'origine de cette demande, vous pouvez ignorer cet email en toute sécurité.</p>
            </div>
      `,
    });

    return res.status(200).json({
      message: "Un lien de réinitialisation a été envoyé à votre adresse mail.",
    });
  } catch (e) {
    console.error("Erreur ForgotPassword Admin MySQL:", e);
    return res.status(500).json({ message: "Erreur interne du serveur." });
  }
};

exports.resetPasswordAdmin = async (req, res) => {
  const { token, identifier, newPassword } = req.body;

  if (!token || !identifier || !newPassword) {
    return res.status(400).json({
      message:
        "Le token, l'identifiant et le nouveau mot de passe sont requis.",
    });
  }

  if (newPassword.length < 8) {
    return res.status(400).json({
      message: "Le nouveau mot de passe doit contenir au moins 8 caractères.",
    });
  }

  try {
    const tokenHash = hashToken(token);

    const user = await prisma.utilisateur_admin.findFirst({
      where: {
        uuid: identifier,
        verification_token: tokenHash,
        verification_expiration: {
          gt: new Date(),
        },
      },
    });

    if (!user) {
      return res.status(400).json({
        message: "Lien de réinitialisation invalide ou expiré.",
      });
    }

    const saltRounds = parseInt(bcryptCost, 10) || 12;
    const newHashedPassword = await bcrypt.hash(newPassword, saltRounds);

    await prisma.utilisateur_admin.update({
      where: { id: user.id },
      data: {
        mot_de_passe: newHashedPassword,
        verification_token: null,
        verification_expiration: null,
        tokenVersion: {
          increment: 1,
        },
      },
    });

    return res.status(200).json({
      message:
        "Votre mot de passe Administrateur a été réinitialisé avec succès.",
    });
  } catch (e) {
    console.error("Erreur resetPassword Admin MySQL/Prisma:", e);
    return res.status(500).json({
      message:
        "Une erreur est survenue lors de la réinitialisation sur le serveur.",
    });
  }
};

exports.registerAdminStep1 = async (req, res) => {
  const { login, email, password, fullname } = req.body;

  if (!login || !email || !password || !fullname) {
    return res.status(400).json({
      message:
        "Les champs login, email, mot de passe et nom complet sont requis.",
    });
  }

  try {
    const existingAdmin = await prisma.utilisateur_admin.findFirst({
      where: {
        OR: [{ login: login }, { email: email }],
      },
    });

    if (existingAdmin) {
      return res.status(409).json({
        message: "Un administrateur avec ce login ou cet email existe déjà.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, BCRYPT_ROUNDS);
    const verificationTokenBrut = makeToken(32);
    const verificationTokenHash = hashToken(verificationTokenBrut);
    const EXP_MIN = registrationExpiryMinutes || 30;
    const verificationExpires = new Date(Date.now() + EXP_MIN * 60 * 1000);

    const newAdmin = await prisma.utilisateur_admin.create({
      data: {
        email: email,
        login: login,
        mot_de_passe: hashedPassword,
        nom_complet: fullname,
        cree_le: new Date(),
        tokenVersion: 1,
        verification_token: verificationTokenHash,
        verification_expiration: verificationExpires,
      },
    });

    const verificationURL = `${url}/admin/confirmation-inscription?token=${verificationTokenBrut}&identifier=${newAdmin.uuid}`;

    await sendMail({
      to: email,
      subject: "Activation de votre compte Administrateur",
      html: `
        <div style="font-family: sans-serif;">
          <h2>Activation de votre compte</h2>
          <p>Bonjour ${fullname},</p>
          <p>Merci de cliquer sur le bouton ci-dessous pour activer votre compte administrateur :</p>
          <a href="${verificationURL}" style="background-color: #002884; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">
            Activer mon compte
          </a>
          <p>Ce lien expire dans <strong>${EXP_MIN} minutes</strong>.</p>
        </div>
      `,
    });

    return res.status(202).json({
      message:
        "Inscription enregistrée. Veuillez vérifier votre email pour activer votre compte.",
    });
  } catch (e) {
    console.error(`Erreur registerAdminStep1 MySQL : ${e.message}`);
    return res
      .status(500)
      .json({ message: "Erreur interne lors de l'inscription." });
  }
};

exports.registerAdminStep2 = async (req, res) => {
  const { token, identifier } = req.body;

  if (!token || !identifier) {
    return res.status(400).json({
      message: "Le jeton et l'identifiant sont obligatoires.",
    });
  }

  try {
    const tokenHash = hashToken(token);

    const admin = await prisma.utilisateur_admin.findFirst({
      where: {
        uuid: identifier,
        verification_token: tokenHash,
        verification_expiration: {
          gt: new Date(),
        },
      },
    });

    if (!admin) {
      return res.status(400).json({
        message: "Lien invalide, expiré ou compte déjà activé.",
      });
    }

    await prisma.utilisateur_admin.update({
      where: { id: admin.id },
      data: {
        verification_token: null,
        verification_expiration: null,
      },
    });

    return res.status(200).json({
      message: "Votre compte Administrateur a été activé avec succès.",
    });
  } catch (e) {
    console.error("Erreur registerAdminStep2 MySQL :", e);
    return res
      .status(500)
      .json({ message: "Erreur interne lors de la vérification." });
  }
};

exports.impersonateClient = async (req, res) => {
  const { client_uuid } = req.body;

  try {
    const targetUser = await prisma.utilisateur_client.findUnique({
      where: { uuid: client_uuid },
      include: {
        role: true,
        societe: {
          include: {
            licences: { include: { plan: true, statut: true } }, 
          },
        },
      },
    });

    if (!targetUser)
      return res
        .status(404)
        .json({ message: "Utilisateur client introuvable." });

    const societeInfo = targetUser.societe;
    const licenceValide = societeInfo?.licences.find(
      (l) => l.statut?.code === "ACTIF",
    );

    const impersonatedPayload = {
      uuid: targetUser.uuid,
      email: targetUser.email,
      role: targetUser.role?.code || "Utilisateur",
      societe_uuid: societeInfo?.uuid,
      societe_id: societeInfo?.id,
      plan: {
        code: licenceValide?.plan?.code,
      },
      is_impersonated: true,
      admin_uuid: req.admin.uuid,
    };

    const token = signAccessToken(impersonatedPayload);

    return res.status(200).json({
      message: `Connexion en tant que ${targetUser.nom_complet} réussie.`,
      token,
      user: {
        uuid: targetUser.uuid,
        email: targetUser.email,
        is_impersonated: true,
      },
    });
  } catch (e) {
    return res.status(500).json({ message: "Erreur lors de l'impersonation." });
  }
};
