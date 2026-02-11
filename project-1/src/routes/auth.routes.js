const express = require("express")
const userModel = require("../models/user.model")

const authRouter = express.Router()
const crypto = require("crypto")
const jwt = require("jsonwebtoken")



authRouter.post("/register", async (req,res)=>{
    const {email,username, password,bio,profileImage} = req.body

    // const isUserExistByEmail = await userModel.findOne({email})

    // if(isUserExistByEmail){
    //     return res.status(409).json({
    //         message:"user already with same email"
    //     })
    // }

    // const isUserExistByUsername = await userModel.findOne({username})

    // if(isUserExistByUsername){
    //     return res.status(409).json({
    //         message:"user already exist by user"
    //     })
    // }

    const isUserAlreadyExist = await userModel.findOne({
        $or:[
            {
                username
            },
            {
                email
            }
        ]
    })
    if(isUserAlreadyExist){
        return res.status(409).json({
            message:"user already exist" + (isUserAlreadyExist).email == email ? "email already exist": "username already exist"
        })
    }

    const hash = crypto.createHash("md5").update(password).digest("hex")

    const user = await userModel.create({
        username,
        password:hash,
        email,
        bio,
        profileImage
    })

    const token = jwt.sign(
        {
        id:user._id
       },
       process.env.JWT_SECRET,{
        expiresIn:"1d"
       })
    res.cookie("token", token)

    res.status(201).json({
        message:"user registered successfully",
        user:{
          email:user.email,
          username:user.username,
          bio:user.bio,
          profileImage:user.profileImage
        }
    })
})


authRouter.post("/login",async (req,res)=>{
    
})

module.exports = authRouter