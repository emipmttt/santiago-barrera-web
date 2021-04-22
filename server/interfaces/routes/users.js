const {
  registerUser,
  loginUser,
  updateUser,
  deleteUser,
  sendEmailRecover,
  getAllUsers,
  changePassword
} = require("../controllers/UserController.js");

const { Router } = require("express");
const router = Router();

router.post('/create', registerUser);
router.post('/login', loginUser);
router.put('/update/:id', updateUser);
router.delete('/delete/:id', deleteUser);

router.get('/getAllUsers', getAllUsers);

router.post("/reset", sendEmailRecover);
router.post('/change-password', changePassword);

module.exports = router;
