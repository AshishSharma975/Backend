const express =  require("express")

const cookieParser = require("cookie-parser")
const cors = require("cors")
const app = express()

const connectDB = require("./config/databse")

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true

}))

// require routes
const authRouter = require("./routes/auth.routes")

const postRouter = require("./routes/post.routes")

const userRouter = require("./routes/user.routes")

const followRouter = require("./routes/follow.routes")



// using routes
app.use("/api/post", postRouter)

app.use("/api/auth",authRouter)

app.use("/api/users",userRouter)

app.use("/api/follow",followRouter)



connectDB()
module.exports = app