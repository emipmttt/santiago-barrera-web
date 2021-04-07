const userEntity = require("../../domain/User");
const userRepository = require("../../infrastructure/repositories/UserMongoRepository");

module.exports = async (
  name,
  email,
  password,
  active,
  type
) => {
  return userRepository.store(new userEntity(
    null,
    name,
    email,
    password,
    active,
    type
  ));
};
