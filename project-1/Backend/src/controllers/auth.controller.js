const userModel = require("../models/user.model");
// const crypto = require("crypto");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");

async function loginController (req, res)  {
  try {
    const { username, email, password } = req.body;

    const user = await userModel.findOne({
      $or: [{ username }, { email }],
    });


    if (!user) {
      return res.status(404).json({
        message: "user not found",
      });
    }

    const isPasswordValid = await bcrypt.compare(password,user.password)

    if (!isPasswordValid) {
      return res.status(401).json({
        message: "password is invalid",
      });
    }

    const token = jwt.sign(
      { id: user._id ,
        username:user.username
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.cookie("token", token);

    res.status(200).json({
      message: "login successful",
      user: {
        email: user.email,
        username: user.username,
        bio: user.bio,
        profileImage: user.profileImage,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "server error", error: err.message });
  }
};



 async function RegisterController (req, res) {
  try {
    const { email, username, password, bio, profileImage } = req.body;

    const isUserAlreadyExist = await userModel.findOne({
      $or: [{ username }, { email }],
    });

    if (isUserAlreadyExist) {
      return res.status(409).json({
        message:
          isUserAlreadyExist.email === email
            ? "email already exist"
            : "username already exist",
      });
    }

    const hash = await bcrypt.hash(password,10)

    const user = await userModel.create({
      username,
      password: hash,
      email,
      bio,
      profileImage,
    });

    const token = jwt.sign(
      { id: user._id ,
        username:user.username
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.cookie("token", token);

    res.status(201).json({
      message: "user registered successfully",
      user: {
        email: user.email,
        username: user.username,
        bio: user.bio,
        profileImage: user.profileImage,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "server error", error: err.message });
  }
};


async function getMeController(req,res) {
  const userid = req.user.id

  const user = await userModel.findById(userid)

  res.status(200).json({
    message: "user found",
    user: {
      email: user.email,
      username: user.username,
      bio: user.bio,
      profileImage: user.profileImage,
    },
  });
}

module.exports = {
    loginController,
    RegisterController,
    getMeController
}
