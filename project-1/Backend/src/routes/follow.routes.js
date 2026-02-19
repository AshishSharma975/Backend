const express = require("express")
const identifyUser = require("../middlewares/auth.middleware")
const {
  sendFollowRequest,
  getMyRequests,
  acceptRequest,
  rejectRequest
} = require("../controllers/follow.controller")

const followRouter = express.Router()

// Send request
// POST /api/follow/request/:username
followRouter.post("/request/:username", identifyUser, sendFollowRequest)

// Get my pending requests
// GET /api/follow/requests
followRouter.get("/requests", identifyUser, getMyRequests)

// Accept
// POST /api/follow/accept/:id
followRouter.post("/accept/:id", identifyUser, acceptRequest)

// Reject
// POST /api/follow/reject/:id
followRouter.post("/reject/:id", identifyUser, rejectRequest)



module.exports = followRouter
