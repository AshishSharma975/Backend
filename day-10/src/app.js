const express = require("express")

const AuthRouter = require("./routes/Auth.route")
const cookieParser = require("cookie-parser")
const app = express()
app.use(express.json())


app.use("/api/auth",AuthRouter)
app.use(cookieParser())
const connectToDB =  require("./config/database")
connectToDB()


module.exports = app