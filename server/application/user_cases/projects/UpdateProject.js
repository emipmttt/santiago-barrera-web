const projectEntity = require("../../../domain/project");
const contentEntity = require("../../../domain/Content");
const getProjectByUrl = require("../../../infrastructure/scraping/GetProjectByUrl");
const projectMongoRepository = require("../../../infrastructure/repositories/ProjectMongoRepository");
const contentMongoRepository = require("../../../infrastructure/repositories/ContentMongoRepository");

module.exports = async (id, body) => {
  const contentObjectIds = [];

  await contentMongoRepository.deleteByProjectId(id);
  const content = await getProjectByUrl(body.url);

  for (let item of content) {
    const contentDB = await contentMongoRepository.store(new contentEntity(null, item.type, item.content, id));
    contentObjectIds.push(contentDB._id);
  }

  const project = new projectEntity(
    body._id,
    body.title,
    body.description,
    body.role,
    body.date,
    body.url,
    contentObjectIds
  );

  return projectMongoRepository.updateById(id, project);
}
