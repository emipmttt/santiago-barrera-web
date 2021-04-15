const projectRepository = require("../../../infrastructure/repositories/ProjectMongoRepository");

module.exports = (id) => {
  return projectRepository.getProjectById(id);
};
