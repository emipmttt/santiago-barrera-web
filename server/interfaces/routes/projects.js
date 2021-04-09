const {
  createProject,
  getAllProjects,
  updateProject,
  deleteProject
} = require("../controllers/ProjectController");

const { Router } = require("express");
const router = Router();

router.get('/', getAllProjects);
router.post('/create', createProject);
router.put('/:id', updateProject);
router.delete('/:id', deleteProject);

module.exports = router;
