const express = require("express")

const AuthRouter = require("./routes/Auth.routes")

const app = express()
app.use(express.json())


app.use("/api/auth",AuthRouter)

const connectToDB =  require("./config/database")
connectToDB()


module.exports = app