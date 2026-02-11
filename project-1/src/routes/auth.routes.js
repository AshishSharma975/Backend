const express = require("express")
const userModel = require("../models/user.model")

const authRouter = express.Router()


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
            message:"user already exist"
        })
    }

})