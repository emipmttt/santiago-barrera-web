const {
  createProject,
  getAllProjects,
  updateProject,
  deleteProject,
  getProjectById,
  rebuildScraping
} = require("../controllers/ProjectController");

const { Router } = require("express");
const router = Router();

router.get("/", getAllProjects);
router.post("/create", createProject);
router.put("/:id", updateProject);
router.put("/rebuild-scraping/:id", rebuildScraping);
router.get("/details/:id", getProjectById);
router.delete("/:id", deleteProject);

module.exports = router;
