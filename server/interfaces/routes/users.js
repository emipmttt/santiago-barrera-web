const { registerUser } = require("../controllers/UserController.js");

const { Router } = require("express");
const router = Router();

router.post('/create', registerUser);

module.exports = router;
