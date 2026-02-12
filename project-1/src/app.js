const express =  require("express")

const cookieParser = require("cookie-parser")

const app = express()

const authRouter = require("../src/routes/auth.routes")

const connectDB = require("./config/databse")

const postRouter = require("./routes/post.routes")

app.use(express.json())
app.use(cookieParser())





app.use("/api/post", postRouter)
app.use("/api/auth",authRouter)
connectDB()
module.exports = app