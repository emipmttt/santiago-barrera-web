const userRepository = require("../../infrastructure/repositories/UserMongoRepository");

module.exports = async (email) => {
  return userRepository.findByEmail(email);
}
