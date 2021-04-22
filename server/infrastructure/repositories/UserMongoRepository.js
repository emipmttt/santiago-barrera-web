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
  },

  async findAll() {
    return User.find().populate("content");
  },

  async updateById(id, userEntity) {
    return User.findOneAndUpdate({ id }, userEntity);
  },

  async deleteById(id) {
    return User.findOneAndDelete({ id });
  }
}

