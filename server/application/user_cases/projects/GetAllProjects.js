const projectMongoRepository = require("../../../infrastructure/repositories/ProjectMongoRepository");

module.exports = async  () => {
  return projectMongoRepository.findAll();
};
