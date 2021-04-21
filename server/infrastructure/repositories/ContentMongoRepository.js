const Content = require("../orm/mongoose/schemas/Content");

module.exports = {
  async store(contentModel) {
    const content = new Content(contentModel)
    return content.save();
  },

  async deleteByProjectId(projectId) {
    return Content.deleteMany({
      belongsTo: projectId
    });
  }
}

