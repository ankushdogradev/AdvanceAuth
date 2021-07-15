const User = require("../models/userModel");
const ErrorResponse = require("../utils/errorResponse");

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
    next(error);
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorResponse("Please enter credentials properly", 400));
  }
  // what we doing here is, if email is correct `user` const will be assigned with password
  // then we are calling matchPassword function which will contain user password and comparing it with
  // entered password
  try {
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return next(new ErrorResponse("Email not registered", 401));
    }

    const isMatch = await user.matchPasswords(password);
    if (!isMatch) {
      return next(new ErrorResponse("Invalid Password", 401));
    }

    res.status(200).json({
      success: true,
      token: "abc123456789",
    });
  } catch (error) {
    next();
  }
};

exports.forgotPassword = (req, res, next) => {
  res.send("ForgotPassword Route");
};

exports.resetPassword = (req, res, next) => {
  res.send("ResetPassword Route");
};
