const express = require("express")
const UserController = require("../controllers/user.controller")
const identifyUser = require("../middlewares/auth.middleware")
const followUserController = require("../controllers/user.controller")

const userRouter = express.Router()


// @routes post /api/users/follow/:userId
userRouter.post("/follow/:username",identifyUser,followUserController)



module.exports = userRouter