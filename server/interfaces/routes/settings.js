const {
  createSetting,
  getSettings,
  updateSettings
} = require("../controllers/SettingsController.js");

const { Router } = require("express");
const router = Router();

router.get("/", getSettings);
router.post("/", createSetting);
router.put("/:id", updateSettings)

module.exports = router;
