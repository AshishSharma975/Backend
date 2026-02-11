const express =  require("express")

const app = express()
const connectDB = require("./config/databse")
app.use(express.json())


connectDB()
module.exports = app