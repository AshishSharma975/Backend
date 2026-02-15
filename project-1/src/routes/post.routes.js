const express = require("express")
const { createPostController, getPostController } = require("../controllers/post.controller")
const postRouter = express.Router()
const multer = require("multer")
const postModel = require("../models/post.model")
const upload = multer({storage:multer.memoryStorage()})


postRouter.post("/", upload.single("image"),createPostController)


postRouter.get("/", getPostController)


async function getPostDetailsController(req, res){
    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({
            message: "anauthorized access.",
        })
    }

    let decoded = null;

    try{
        decoded = jwt.verify(token, process.env.JWT_SECRET)
    }catch(err){
        return res.status(401).json({
            message: "invalid token.",
        })
    }

    const userId = decoded.id;

    const postId = req.params.postId;

    const post = await postModel.findById(postId)

    if(post){
        return res.status(404).json({
            message:"post not found."
        })
    }
}
module.exports = postRouter
