const express =  require("express")

const cookieParser = require("cookie-parser")

const app = express()

const connectDB = require("./config/databse")

app.use(express.json())
app.use(cookieParser())


// require routes
const authRouter = require("../src/routes/auth.routes")
const postRouter = require("./routes/post.routes")
const userRouter = require("../src/routes/user.routes")

// using routes
app.use("/api/post", postRouter)
app.use("/api/auth",authRouter)
app.use("/api/users",userRouter)
connectDB()
module.exports = app