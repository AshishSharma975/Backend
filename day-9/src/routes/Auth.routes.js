const express = require("express");
const UserModel = require("../models/user.model");

const AuthRouter = express.Router();

AuthRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = await UserModel.findOne({ email });
  if (existingUser) {
    return res.status(400).json({
      message: "User with this email already exists",
    });
  }

  const user = await UserModel.create({
    name,
    email,
    password,
  });

  res.status(201).json({
    message: "user registered",
    user,
  });
});

module.exports = AuthRouter;
