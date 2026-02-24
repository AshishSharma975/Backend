const express = require("express")
const {
  createPostController,
  getPostController,
  getPostDetailsController,
  likePostController,
  getFeedController
} = require("../controllers/post.controller")
const postModel = require("../models/post.model")


const postRouter = express.Router()


const multer = require("multer")


const upload = multer({ storage: multer.memoryStorage() })


const identifyUser = require("../middlewares/auth.middleware")

// POST /api/post
// @route POST /api/post
// @desc Create post
// @access Private
postRouter.post("/", upload.single("image"), identifyUser, createPostController)

// GET /api/post
// @route GET /api/post
// @desc Get all posts
// @access Private
postRouter.get("/", identifyUser, getPostController)

// GET /api/post/details/:postId
// @route GET /api/post/details/:postId
// @desc Get post details
// @access Private
postRouter.get("/details/:postId", identifyUser, getPostDetailsController)

// POST /api/post/like/:postId
// @route POST /api/post/like/:postId
// @desc Like post
// @access Private
postRouter.post("/like/:postId", identifyUser, likePostController)


// @route GET /api/post/feed
// @desc Get feed
// @access Private
postRouter.get("/feed", identifyUser, getFeedController)

module.exports = postRouter
