const express = require("express")
const UserController = require("../controllers/user.controller")
const identifyUser = require("../middlewares/auth.middleware")
const{ followUserController, unfollowUserController} = require("../controllers/user.controller")
const userRouter = express.Router()


// @routes post /api/users/follow/:userId
userRouter.post("/follow/:username",identifyUser,followUserController)

// @routes post /api/users/unfollow/:userid
userRouter.post("/unfollow/:username", identifyUser,unfollowUserController)

module.exports = userRouter