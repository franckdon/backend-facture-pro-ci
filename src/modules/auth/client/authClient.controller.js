const bcrypt = require("bcrypt");
const { signAccessToken, signRefreshToken } = require("../../../helpers/token");
const { randomCode, hashCode, expiryFromNow } = require("../../../helpers/otp");
const { makeToken, hashToken } = require("../../../helpers/token");
const { verifyCode } = require("../../../helpers/otp");
const { sendMail } = require("../../../helpers/mailer");
const prisma = require("../../../libs/master");
const env = require("../../../configs/env");
const { otpLength, otpExpiryMinutes } = env.otp;
const { url } = env.frontend;

const cleanBigInt = (obj) => {
  return JSON.parse(
    JSON.stringify(obj, (key, value) =>
      typeof value === "bigint" ? value.toString() : value,
    ),
  );
};

exports.loginClient = async (req, res) => {
  const { login, password } = req.body;

  if (!login || !password) {
    return res
      .status(400)
      .json({ message: "Le login et le mot de passe sont requis." });
  }

  try {
    const user = await prisma.utilisateur_client.findFirst({
      where: { login: login },
    });

    if (!user) {
      return res.status(401).json({ message: "Identifiants invalides." });
    }

    if (user.statut_id !== 1) {
      return res.status(401).json({
        message: "Compte inactif. Veuillez contacter le support.",
      });
    }

    const isMatch = await bcrypt.compare(password, user.mot_de_passe);
    if (!isMatch) {
      return res
        .status(401)
        .json({ message: "Mot de passe incorrect, veuillez réessayer." });
    }

    if (!user.societe_id) {
      return res.status(403).json({
        message: "Compte utilisateur non lié à une société. Accès refusé.",
      });
    }

    const userData = await prisma.utilisateur_client.update({
      where: { id: user.id },
      data: { dernier_login: new Date() },
      include: {
        role: true,
        societe: {
          include: {
            licence: {
              include: {
                plan: true, 
                statut: true, 
              },
              where: {
                date_expiration: { gt: new Date() },
              },
            },
          },
        },
      },
    });

    const societeInfo = userData.societe;
    

    const licenceValide = societeInfo?.licences.find(l => 
      l.statut?.code === 'ACTIF' && 
      (l.date_expiration === null || new Date(l.date_expiration) > new Date())
    );

    if (!licenceValide) {
      return res.status(403).json({ 
        message: "Votre licence est expirée ou inactive. Veuillez régulariser votre abonnement." 
      });
    }

    const currentPlan = licenceValide.plan;
    const roleName = userData.role?.code || "Utilisateur";


    const userForToken = {
      uuid: userData.uuid,
      email: userData.email,
      role: roleName,
      societe_uuid: societeInfo?.uuid,
      db_name: societeInfo?.bd_name,
      plan: {
        code: currentPlan?.code,
        limite_factures: currentPlan?.limite_factures,
        limite_utilisateurs: currentPlan?.limite_utilisateurs
      }
    };

    const token = signAccessToken(userForToken);
    const refreshToken = signRefreshToken(userForToken);

    return res.status(200).json(
      cleanBigInt({
        message: "Connexion réussie.",
        token,
        refreshToken,
        user: {
          uuid: userData.uuid,
          email: userData.email,
          role: roleName,
          plan: currentPlan?.libelle,
          redirection_data: [
            {
              nom_societe: societeInfo?.raison_sociale_societe,
              societe_uuid: societeInfo?.uuid,
              role: roleName,
            },
          ],
        },
      })
    );
  } catch (e) {
    console.error("Erreur Login Client:", e.message);
    res.status(500).json({ message: "Erreur interne du serveur." });
  }
};

exports.forgotPasswordClient = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "L'email est requis." });
  }

  try {
    const user = await prisma.utilisateur_client.findUnique({
      where: { email: email },
      select: { id: true },
    });

    if (!user) {
      return res.status(200).json({
        message:
          "Si cet email existe, un lien de réinitialisation a été envoyé.",
      });
    }

    const resetTokenBrut = makeToken(32);
    const resetTokenHash = hashToken(resetTokenBrut);

    const minutes = parseInt(process.env.RESET_EXPIRY_MINUTES) || 60;
    const resetExpires = new Date(Date.now() + minutes * 60 * 1000);

    await prisma.utilisateur_client.update({
      where: { id: user.id },
      data: {
        reset_token: resetTokenHash,
        reset_expiration: resetExpires,
      },
    });

    const resetURL = `${url}/client/reset-password?token=${resetTokenBrut}&email=${encodeURIComponent(email)}&admin=false`;

    await sendMail({
      to: email,
      subject: "Réinitialisation de votre mot de passe FNE",
      html: `
        <p>Vous avez demandé la réinitialisation de votre mot de passe.</p>
        <p><a href="${resetURL}" style="display:inline-block; padding:10px 20px; background-color:#007bff; color:white; border-radius:5px;">Réinitialiser mon mot de passe</a></p>
        <p>Ce lien est valable ${minutes} minutes.</p>
      `,
    });

    return res.status(200).json({
      message:
        "Un lien de réinitialisation a été envoyé à votre adresse e-mail.",
    });
  } catch (e) {
    console.error("Erreur forgotPassword MySQL:", e);
    return res.status(500).json({ message: "Erreur interne du serveur." });
  }
};

exports.resetPasswordClient = async (req, res) => {
  const { token, email, newPassword } = req.body;

  if (!token || !email || !newPassword) {
    return res.status(400).json({ message: "Données manquantes." });
  }

  if (newPassword.length < 8) {
    return res
      .status(400)
      .json({ message: "Le mot de passe doit faire au moins 8 caractères." });
  }

  const tokenHash = hashToken(token);

  try {
    const user = await prisma.utilisateur_client.findFirst({
      where: {
        email: email,
        reset_token: tokenHash,
        reset_expiration: { gt: new Date() },
      },
    });

    if (!user) {
      return res.status(400).json({
        message:
          "L'email ou le lien de réinitialisation est invalide ou expiré.",
      });
    }

    const newHashedPassword = await bcrypt.hash(
      newPassword,
      parseInt(process.env.BCRYPT_COST) || 12,
    );

    await prisma.utilisateurs_globaux.update({
      where: { id: user.id },
      data: {
        mot_de_passe: newHashedPassword,
        reset_token: null,
        reset_expiration: null,
        tokenVersion: { increment: 1 },
      },
    });

    return res.status(200).json({
      message: "Votre mot de passe a été réinitialisé avec succès.",
    });
  } catch (e) {
    console.error("Erreur resetPassword MySQL:", e);
    return res.status(500).json({ message: "Erreur serveur." });
  }
};
