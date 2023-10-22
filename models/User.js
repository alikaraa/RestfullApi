const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type : String,
        required : [true,"Plase provide a name"]
    },
    email: {
        type : String,
        required : [true,"Please Provide a email"],
        unique : true,
    },
    role : {
        type : String,
        default : "user",
        enum :["user","admin"]  //2 tane role olabilir user yada admin
    },
    password : {
        type:String,
        minlength :[6, "Please Provide a password minLengt"],
        required : [true, "Please provide a password"],
        select : false   // user i get ile aldigimizda parolasi gozukmuycek
    },
    token : {
        type : Number,
    },
    isActive : {
        type : Boolean,
        default : false
    },
    createdAt:{
        type : Date,
        default : Date.now
    }
});



module.exports = mongoose.model("User",UserSchema);