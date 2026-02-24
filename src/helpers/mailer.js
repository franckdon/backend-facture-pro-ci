const { transporter } = require('../configs/smtp');

async function sendMail({ to, subject, text, html }) {
  return transporter.sendMail({
    from:'Support Facture Pro CI',
    to, subject, text, html: html || `<p>${text}</p>`,
  });
}

module.exports = { sendMail };