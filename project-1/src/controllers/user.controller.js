const { json } = require("express")
const followModel = require("../models/follow.model")

async function followUserController(req,res) {
    const followerUsername = req.user.username
    const followingUsername = req.params.username


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