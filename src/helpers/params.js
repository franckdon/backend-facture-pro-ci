const crypto = require('crypto')

function slugify(text) {
    if (!text) return '';

    return text
        .normalize('NFD') 
        .replace(/[\u0300-\u036f]/g, "") 
        .toLowerCase() 
        .trim() 
        .replace(/[^a-z0-9\s-]/g, '') 
        .replace(/[\s-]+/g, '_') 
        .substring(0, 50);
}

function generateLicenseToken(seed) {
    const uniqueSeed = seed + Date.now().toString() + Math.random();
    return crypto.createHash('sha256').update(uniqueSeed).digest('hex');
}

module.exports = {
    slugify, generateLicenseToken
};