const express = require("express")
const { createPostController, getPostController, getPostDetailsController } = require("../controllers/post.controller")
const postRouter = express.Router()
const multer = require("multer")
const postModel = require("../models/post.model")
const upload = multer({storage:multer.memoryStorage()})


postRouter.post("/", upload.single("image"),createPostController)


postRouter.get("/", getPostController)

postRouter.get("/deteails/:postId",getPostDetailsController)


module.exports = postRouter
