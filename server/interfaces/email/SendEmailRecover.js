const emailClient = require("../../infrastructure/email/EmailClient");

module.exports = async (to, text) => {
  return emailClient({
    to,
    text,
    from: 'DEFAULT EMAIL SEND <DEFAULT@EMAIL.COM>',
    subject: "Reset Password",
  });
}
