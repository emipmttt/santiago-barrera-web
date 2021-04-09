const nodemailer = require("nodemailer");
const config = require("../config/email");

module.exports = async (config) => {
  const transporter = nodemailer.createTransport(config.credentials);
  return transporter.sendMail(config);
};
