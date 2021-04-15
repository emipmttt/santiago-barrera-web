const CreateProject = require("../../application/user_cases/projects/CreateProject");
const GetAllProjects = require("../../application/user_cases/projects/GetAllProjects");
const UpdateProject = require("../../application/user_cases/projects/UpdateProject");
const DeleteProject = require("../../application/user_cases/projects/DeleteProject");

module.exports = {
  async createProject(req, res) {
    try {
      const { title, description, role, date, url } = req.body;

      const project = await CreateProject(
        title,
        description,
        role,
        date,
        url,
      );

      return res.json({
        ok: true,
        data: project,
        message: "Project created"
      });
    } catch (e) {
      console.log(e);
    }
  },

  async getAllProjects(req, res) {
    try {
      const projects = await GetAllProjects();

      return res.json({
        ok: true,
        data: projects
      });
    } catch (e) {
      console.log(e);
    }
  },

  async updateProject(req, res) {
    try {
      await UpdateProject(req.params.id, req.body);

      return res.json({
        ok: true,
        message: "Updated"
      });
    } catch (e) {
      console.log(e);
    }
  },

  async deleteProject(req, res) {
    try {
      await DeleteProject(req.params.id);

      return res.json({
        ok: true,
        message: "Deleted"
      });
    } catch (e) {
      console.log(e);
    }
  }
};
