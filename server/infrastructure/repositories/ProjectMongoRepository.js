import projects from "../../../pages/projects";

const Project = require("../orm/mongoose/schemas/Project");

module.exports = {
  async store(projectModel) {
    const project = new Project(projectModel)
    return project.save();
  },

  async findAll() {
    return Project.find().populate("content");
  },

  async updateById(id, entity) {
    return Project.findOneAndUpdate({ id }, entity);
  },

  async deleteById(id) {
    return Project.findOneAndDelete({ id });
  },

  async getProjectById(id) {
    return Project.findById(id);
  }
}

