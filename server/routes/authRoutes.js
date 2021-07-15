const express = require("express");
const router = express.Router();

// controllers
const {
  register,
  login,
  forgotPassword,
  resetPassword,
} = require("../controllers/authControllers");

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/forgotPassword").post(forgotPassword);
router.route("/resetPassword/:resetToken").put(resetPassword);

module.exports = router;
