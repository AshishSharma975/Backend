const express = require("express")
const { createPostController, getPostController, getPostDetailsController } = require("../controllers/post.controller")
const postRouter = express.Router()
const multer = require("multer")
const postModel = require("../models/post.model")
const upload = multer({storage:multer.memoryStorage()})
const identifyUser = require("../middlewares/auth.middleware")

postRouter.post("/", upload.single("image"),identifyUser,createPostController)


postRouter.get("/", identifyUser,getPostController)

postRouter.get("/deteails/:postId",identifyUser,getPostDetailsController)


module.exports = postRouter
