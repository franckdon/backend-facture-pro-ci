const dotenv = require('dotenv');
const path = require('path');
dotenv.config({ path: path.resolve(process.cwd(), '.env') });
const nodeEnv = process.env.NODE_ENV || 'development';
const envFile = `.env.${nodeEnv}`;
dotenv.config({ path: path.resolve(process.cwd(), envFile) });

console.log(`[Config] Base .env et spécifique ${envFile} chargés.`);

module.exports = {
  port : {
    development: parseInt(process.env.PORT) || 3000,
  },
  databaseUrl: process.env.DATABASE_URL,
  dbAdmin: {
    host: process.env.DB_HOST_ADMIN,
    user: process.env.DB_USER_ADMIN,
    password: process.env.DB_PASSWORD_ADMIN,
    database: process.env.DB_NAME_ADMIN,
  },
  smtp: {
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT),
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  jwt: {
    privateKeyPath: process.env.JWT_PRIVATE_KEY_PATH,
    publicKeyPath: process.env.JWT_PUBLIC_KEY_PATH,
    issuer: process.env.JWT_ISSUER,
    audience : process.env.JWT_AUDIENCE,
    kid: process.env.JWT_KID,
    accessTokenExpiry: process.env.JWT_ACCESS_TOKEN_EXPIRY || '15m',
    refreshTokenExpiry: process.env.JWT_REFRESH_TOKEN_EXPIRY || '30d',
  },
  otp: {
    otpLength: process.env.OTP_LENGTH,
    otpExpiryMinutes: process.env.OTP_EXPIRY_MINUTES,
    resetExpiryMinutes: process.env.RESET_EXPIRY_MINUTES,
    registrationExpiryMinutes: process.env.REGISTRATION_EXPIRY_MINUTES,
    bcryptCost: process.env.BCRYPT_COST || 12,
  },
  frontend : {
    url: process.env.FRONTEND_URL
  }
};