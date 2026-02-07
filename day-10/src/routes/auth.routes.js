const express = require("express");
const UserModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const AuthRouter = express.Router();

AuthRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = await UserModel.findOne({ email });
  if (existingUser) {
    return res.status(409).json({
      message: "User with this email already exists",
    });
  }

  const user = await UserModel.create({
    name,
    email,
    password,
  });

  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    process.env.jwt_SECRET,
  );

  res.cookie("jwt_token", token);

  res.status(201).json({
    message: "user registered",
    user,
    token,
  });
});

// /api/auth/protected
AuthRouter.post("/protected", (req, res) => {
  console.log(req.cookies);

  res.status(200).json({
    message: "this is your protected server",
  });
});

// /api/auth/login
// the name of this function is also called as controller
AuthRouter.post("/login", async (req, res) => {
  const { name, email, password } = req.body;

  const user = await UserModel.findOne({ email });

  if (!user) {
    return res.status(404).json({
      message: "user not found with this email address",
    });
  }
  const isPasswordMatched = user.password === password;

  if (!isPasswordMatched) {
    return res.status(401).json({
      message: "invalid password",
    });
  }
  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.jwt_SECRET,
  );

  res.cookie("jwt_token", token);

  res.status(200).json({
    message: "user logged in",
    user,
  });
});

module.exports = AuthRouter;
