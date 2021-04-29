const userRepository = require("../../infrastructure/repositories/UserMongoRepository");

module.exports = async () => {
  return userRepository.findAll();
}
