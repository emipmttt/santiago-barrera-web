const User = require("../orm/mongoose/schemas/User");

module.exports = {
  async store(userModel) {
    const user = new User(userModel)
    return user.save();
  },

  async findByEmail(email) {
    return User.findOne({
      email
    });
  }
}

