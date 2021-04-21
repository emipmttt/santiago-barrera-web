const projectEntity = require("../../../domain/project");
const contentEntity = require("../../../domain/Content");
const projectRepository = require("../../../infrastructure/repositories/ProjectMongoRepository");
const contentRepository = require("../../../infrastructure/repositories/ContentMongoRepository");
const getProjectByUrl = require("../../../infrastructure/scraping/GetProjectByUrl");

module.exports = async (title, description, role, date, url) => {
  const content = await getProjectByUrl(url);

  const contentObjectIds = [];
  const project =await projectRepository.store(new projectEntity(null, title, description, role, date, url, []));

  for (let item of content) {
    const contentDB = await contentRepository.store(new contentEntity(null, item.type, item.content, project._id));
    contentObjectIds.push(contentDB._id);
  }

  return projectRepository.store(
    new projectEntity(null, title, description, role, date, url, contentObjectIds)
  );
};
