const followModel = require("../models/follow.model")
const userModel = require("../models/user.model")

// 1) Send follow request (status = pending)
async function sendFollowRequest(req, res) {
  const fromUser = req.user.username
  const toUser = req.params.username

  if (fromUser === toUser) {
    return res.status(400).json({ message: "You cannot follow yourself" })
  }

  const targetUser = await userModel.findOne({ username: toUser })
  if (!targetUser) {
    return res.status(404).json({ message: "User not found" })
  }

  const already = await followModel.findOne({
    follower: fromUser,
    following: toUser
  })

  if (already) {
    return res.status(400).json({ message: "Request already exists" })
  }

  const request = await followModel.create({
    follower: fromUser,
    following: toUser,
    status: "pending"
  })

  return res.status(201).json({
    message: "Follow request sent",
    request
  })
}

// 2) Get my pending requests
async function getMyRequests(req, res) {
  const me = req.user.username

  const requests = await followModel.find({
    following: me,
    status: "pending"
  })

  return res.status(200).json({ requests })
}

// 3) Accept request
async function acceptRequest(req, res) {
  const me = req.user.username
  const requestId = req.params.id

  const request = await followModel.findById(requestId)
  if (!request) {
    return res.status(404).json({ message: "Request not found" })
  }

  if (request.following !== me) {
    return res.status(403).json({ message: "Not allowed" })
  }

  request.status = "accepted"
  await request.save()

  return res.status(200).json({
    message: "Request accepted",
    request
  })
}

// 4) Reject request
async function rejectRequest(req, res) {
  const me = req.user.username
  const requestId = req.params.id

  const request = await followModel.findById(requestId)
  if (!request) {
    return res.status(404).json({ message: "Request not found" })
  }

  if (request.following !== me) {
    return res.status(403).json({ message: "Not allowed" })
  }

  request.status = "rejected"
  await request.save()

  return res.status(200).json({
    message: "Request rejected",
    request
  })
}

module.exports = {
  sendFollowRequest,
  getMyRequests,
  acceptRequest,
  rejectRequest
}
