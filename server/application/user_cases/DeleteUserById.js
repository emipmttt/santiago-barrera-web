const userRepository = require("../../infrastructure/repositories/UserMongoRepository");

module.exports = async (id) => {
  return userRepository.deleteById(id);
}
