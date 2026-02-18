const { json } = require("express")
const followModel = require("../models/follow.model")

async function followUserController(req,res) {
    const followerUsername = req.user.username
    const followingUsername = req.params.username


    if(followingUsername == followerUsername){
        return res.status(400).json({
            message:"you cannot follow yourself."
        })
    }  

    const isAlreadyFollowing = await followModel.findOne({
     follower:followerUsername,
     following:followerUsername
    })

    if(isAlreadyFollowing){
        return res.status(200).json({
            message:"you are already follwing.",
            follow :isAlreadyFollowing
        })
    }

   const followRecord = await followModel.create({
    follower:followerUsername,
    following:followerUsername
   })

res.status(201).json({
   message: `You are now following ${followingUsername}`,
    follow:followRecord
})

}


module.exports = followUserController