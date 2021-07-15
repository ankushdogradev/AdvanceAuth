const User = require("../models/userModel");

exports.register = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.create({
      username,
      email,
      password,
    });

    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({
      success: false,
      error: "Please provide email & password",
    });
  }
  // what we doing here is, if email is correct `user` const will be assigned with password
  // then we are calling matchPassword function which will contain user password and comparing it with
  // entered password
  try {
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      res.status(404).json({ success: false, error: "Email not registered" });
    }

    const isMatch = await user.matchPasswords(password);
    if (!isMatch) {
      res.status(404).json({ success: false, error: "Invalid Password" });
    }

    res.status(200).json({
      success: true,
      token: "abc123456789",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.forgotPassword = (req, res, next) => {
  res.send("ForgotPassword Route");
};

exports.resetPassword = (req, res, next) => {
  res.send("ResetPassword Route");
};
