const mongoose = require("mongoose")
const userSchema = new mongoose.Schema(
    {
        username:{type:String,require:true,unique:true},
        fullname:{type:String},
        email:{type:String,require:true,unique:true},
        img:{type:String,require:true},
        birthday:{type:String},
        address:{type:String},
        phone:{type:String},
        sex:{type:String},
        password:{type:String,require:true},
        isAdmin:{
            type:Boolean,
            default:false
        },
        img: {type:String}
    },
    {timestamps:true}
)
module.exports = mongoose.model("User",userSchema);
