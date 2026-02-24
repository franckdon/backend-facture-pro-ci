const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const env = require("../configs/env");
const {otpLength, bcryptCost} = env.otp;

const OTP_LENGTH = Number(otpLength || 4);
const BCRYPT_COST = Number(bcryptCost|| 12);

function randomCode(len = otpLength, { forbidAllZero = true } = {}) {
    if (len < 1 || len > 12) throw new Error("OTP length must be 1..12");
    let code;
    do {
        const max = 10 ** len;
        code = crypto.randomInt(0, max).toString().padStart(len, "0");
    } while (forbidAllZero && Number(code) === 0);
    return code; 
}

async function hashCode(code) {
    const salt = await bcrypt.genSalt(bcryptCost);
    return bcrypt.hash(String(code).trim(), salt);
}

async function verifyCode(code, hash) {
    return bcrypt.compare(String(code).trim(), hash);
}

function expiryFromNow(minutes) {
    return new Date(Date.now() + minutes * 60 * 1000);
}

module.exports = { randomCode, hashCode, verifyCode, expiryFromNow };