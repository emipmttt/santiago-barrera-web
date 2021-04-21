const projectRepository = require("../../../infrastructure/repositories/ProjectMongoRepository");
const contentRepository = require("../../../infrastructure/repositories/ContentMongoRepository");

module.exports = async (id) => {
  await contentRepository.deleteByProjectId(id);
  return projectRepository.deleteById(id);
};
