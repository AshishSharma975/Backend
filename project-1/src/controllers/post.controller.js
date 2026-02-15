const postModel = require("../models/post.model");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");
const { Folders } = require("@imagekit/nodejs/resources.js");
const jwt = require("jsonwebtoken");

const imageKit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function createPostController(req, res) {
  console.log(req.body, req.file);

  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "token not provided, unathorized access.",
    });
  }

  let decoded = null;

  try {
     decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return res.status(401).json({
      message: "user not authorized.",
    });
  }



  const file = await imageKit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"),
    fileName: "test",
    folder: "cohort-2-insta-clone-posts",
  });

  // res.send(file)

  const post = await postModel.create({
    caption: req.body.caption,
    imgUrl: file.url,
    user: decoded.id,
  });

  res.status(201).json({
    message: "post created successfully",
    post,
  });
}

async function getPostController(req, res) {
     const token = req.cookies.token;
     
     
let decoded = null;

     try{
      decoded = jwt.verify(token, process.env.JWT_SECRET)
     }catch(err){
      return res.status(401).json({
        message: "token invalid.",
      });
     }

     const userId = decoded.id;

     const post = await postModel.find({
      user: userId,
     })

     res.status(200).json({
      message: "post fetched successfully",
      post,
     })
}

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

    if(!post){
        return res.status(404).json({
            message:"post not found."
        })
    }

    const isValidUser = post.user.toString() === userId;

    
    if(!isValidUser){
        return res.status(401).json({
            message:"forbidden content."
        })
    }

    return res.status(200).json({
        message:"post fetched successfully",
        post,
    })

}

module.exports = {
    createPostController,
    getPostController,
    getPostDetailsController,
};
