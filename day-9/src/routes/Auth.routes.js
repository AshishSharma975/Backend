const express = require("express");
const UserModel = require("../models/user.model");
const jwt = require("jsonwebtoken")
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

  const token = jwt.sign(
    {
    id:user._id,
    email: user.email
   },
  process.env.jwt_SECRET

)

res.cookie("jwt_token", token)
  
  res.status(201).json({
    message: "user registered",
    user,
    token
  });
});

module.exports = AuthRouter;
