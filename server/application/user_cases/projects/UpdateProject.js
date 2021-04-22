const projectMongoRepository = require("../../../infrastructure/repositories/ProjectMongoRepository");

module.exports = async (id, body) => {
  return projectMongoRepository.updateById(id, body)
}
