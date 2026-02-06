const mongoose = require("mongoose")


function connectToDB(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("your system is connected to database")
    })
}

module.exports = connectToDB