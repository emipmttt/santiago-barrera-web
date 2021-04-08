const bcrypt = require("bcryptjs");

module.exports = {
  async hash(plainString) {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(plainString, salt);
  },

  compare(plainText, hash) {
    return bcrypt.compare(plainText, hash);
  }
};
