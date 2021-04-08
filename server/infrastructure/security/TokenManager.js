const jwt = require("jsonwebtoken");
const environment = require("../config/environment");

module.exports = {
  generate(payload) {
    return jwt.sign(payload, environment.jsonwebtoken.secret);
  },

  decode(token) {
    return jwt.verify(token, environment.jsonwebtoken.secret);
  }
}
