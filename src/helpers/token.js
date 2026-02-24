const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const env = require("../configs/env");

const { privateKeyPath, publicKeyPath, issuer, kid, audience, accessTokenExpiry, refreshTokenExpiry } = env.jwt;

if (!privateKeyPath || !publicKeyPath) {
  throw new Error("Erreur: JWT_PRIVATE_KEY_PATH ou JWT_PUBLIC_KEY_PATH non défini dans le .env");
}

const ALG = 'RS256';

const PRIVATE_KEY = fs.readFileSync(path.resolve(process.cwd(), privateKeyPath), "utf8");
const PUBLIC_KEY = fs.readFileSync(path.resolve(process.cwd(), publicKeyPath), "utf8");

const jti = () => (crypto.randomUUID?.() || crypto.randomBytes(16).toString("hex"));


function validateExpiry(expiry, defaultValue) {
  if (!expiry) return defaultValue;
  
  if (typeof expiry === 'number') {
    return expiry > 0 ? expiry : defaultValue;
  }
  
  if (typeof expiry === 'string') {
    const validPattern = /^(\d+)([smhdwy])$/;
    if (validPattern.test(expiry)) {
      return expiry;
    }
  }
  
  console.warn(`[JWT] Durée invalide: ${expiry}. Utilisation de la valeur par défaut: ${defaultValue}`);
  return defaultValue;
}

function signAccessToken(user, opts = {}) {
  const userId = user.uuid || user.id || user._id;

  if (!userId) {
    console.error("Attention : Tentative de signature d'un token sans ID utilisateur", user);
  }

  const payload = {
    uuid: String(userId),
    role: user.role?.toString?.(),
    tokenVersion: Number(user.tokenVersion) || 0,
    ...(user.clientFNE && { clientFNE: user.clientFNE })
  };
  
  const expiresIn = validateExpiry(
    opts.expiresIn || accessTokenExpiry,
    '15m'
  );
  
  const signOpts = { 
    algorithm: ALG, 
    expiresIn,
    jwtid: jti(), 
    keyid: kid || undefined 
  };

  if (issuer)   signOpts.issuer   = issuer;
  if (audience) signOpts.audience = audience;

  return jwt.sign(payload, PRIVATE_KEY, signOpts);
}


function signRefreshToken(user, opts = {}) {
  const userId = user.uuid || user.id || user._id;

  const payload = { 
    sub: String(userId), 
    typ: "refresh", 
    tokenVersion: Number(user.tokenVersion) || 0 
  };
  
  const expiresIn = validateExpiry(
    opts.expiresIn || refreshTokenExpiry,
    '30d'
  );
  
  const signOpts = { 
    algorithm: ALG, 
    expiresIn,
    jwtid: jti(), 
    keyid: kid || undefined,
  };

  if (issuer)   signOpts.issuer   = issuer;
  if (audience) signOpts.audience = audience;

  return jwt.sign(payload, PRIVATE_KEY, signOpts);
}

function verifyToken(token, { expectRefresh = false } = {}) {
  const verifyOpts = { algorithms: [ALG], clockTolerance: 5 };
  
  if (issuer)   verifyOpts.issuer   = issuer;
  if (audience) verifyOpts.audience = audience;

  try {
    const decoded = jwt.verify(token, PUBLIC_KEY, verifyOpts);
    
    if (expectRefresh && decoded.typ !== "refresh") {
      const e = new Error("Mauvais type de token (Refresh attendu)"); 
      e.code = "BAD_TOKEN_TYPE"; 
      throw e;
    }
    return decoded;
  } catch (err) {
    throw err; 
  }
}

function makeToken(n = 24) {
  return crypto.randomBytes(n).toString("hex");
}


function hashToken(token) {
  return crypto.createHash("sha256").update(String(token), "utf8").digest("hex");
}

module.exports = { 
  signAccessToken, 
  signRefreshToken, 
  verifyToken, 
  makeToken, 
  hashToken 
};