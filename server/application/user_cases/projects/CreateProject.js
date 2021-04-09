const projectEntity = require("../../../domain/project");
const projectRepository = require("../../../infrastructure/repositories/ProjectMongoRepository");

module.exports = async (
  title,
  description,
  role,
  date,
  url,
  content
) => {
  return projectRepository.store(new projectEntity(
    null,
    title,
    description,
    role,
    date,
    url,
    content
  ));
}
