const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:[true,"user name already exist"],
        required:[,true,"user name required"]
    },
    email:{
        type:String,
        unique:[true, "email is already exist"],
        required:[true,"email is required"]
    },
    password:{
        type:String,
        required:[true,"password is required"],
        select:false

    },
    bio:String,
    profileImage:{
        type:String,
        default:"https://ik.imagekit.io/8scpvma7j/24-248253_user-profile-default-image-png-clipart-png-download.png"
    },
    
})

const userModel = mongoose.model("users", userSchema)

module.exports = userModel