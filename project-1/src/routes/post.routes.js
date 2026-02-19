const express = require("express")
const { createPostController, getPostController, getPostDetailsController } = require("../controllers/post.controller")
const postRouter = express.Router()
const multer = require("multer")
const postModel = require("../models/post.model")
const upload = multer({storage:multer.memoryStorage()})
const identifyUser = require("../middlewares/auth.middleware")
const likePostController = require("../controllers/post.controller")

//post /api/post
postRouter.post("/", upload.single("image"),identifyUser,createPostController)

// get /api/post
postRouter.get("/", identifyUser,getPostController)


// post /api/post/deteails/:postid
postRouter.get("/deteails/:postId",identifyUser,getPostDetailsController)


// post /api/post/like/:postid

  postRouter.post("/like/:postid",identifyUser,like,likePostController)

module.exports = postRouter
