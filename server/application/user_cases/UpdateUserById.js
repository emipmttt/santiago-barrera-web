const User = require("../../domain/User");
const userRepository = require("../../infrastructure/repositories/UserMongoRepository");

module.exports = async (id, body) => {
  const user = new User(null, body.name, body.email, body.password, body.active, body.type);
  return userRepository.updateById(id, user);
}
