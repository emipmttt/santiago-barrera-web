const { registerUser, loginUser } = require("../controllers/UserController.js");

const { Router } = require("express");
const router = Router();

router.post('/create', registerUser);
router.post('/login', loginUser);

module.exports = router;
