const mongoose = require("mongoose")
const messageSchema = new mongoose.Schema(
    {
        fullname:{type:String},
        email:{type:String},
        phone:{type:String},
        message:{type:String},

    },
    {timestamps:true}
)
module.exports = mongoose.model("Message",messageSchema);
