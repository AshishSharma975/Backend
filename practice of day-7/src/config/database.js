const mongoose = require('mongoose');

function connectDB(){
    mongoose.connect('mongodb+srv://ashish:soO0dwYjf4dVXV1N@cluster0.6fducnw.mongodb.net/day-7')
    .then(()=>{
        console.log("connected to database");
    })
}

module.exports = connectDB;