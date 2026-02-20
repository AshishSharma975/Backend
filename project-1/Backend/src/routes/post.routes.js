const express = require("express")
const {
  createPostController,
  getPostController,
  getPostDetailsController,
  likePostController
} = require("../controllers/post.controller")
const postModel = require("../models/post.model")


const postRouter = express.Router()


const multer = require("multer")


const upload = multer({ storage: multer.memoryStorage() })


const identifyUser = require("../middlewares/auth.middleware")

// POST /api/post
postRouter.post("/", upload.single("image"), identifyUser, createPostController)

// GET /api/post
postRouter.get("/", identifyUser, getPostController)

// GET /api/post/details/:postId
postRouter.get("/details/:postId", identifyUser, getPostDetailsController)

// POST /api/post/like/:postId
postRouter.post("/like/:postId", identifyUser, likePostController)

module.exports = postRouter
