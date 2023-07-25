const mongoose = require("mongoose")
const NewSchema = new mongoose.Schema(
    {
        title:{type:String,require:true,unique:true},
        descSummary:{type:String},
        descDetails:{type:String},
        img:{type:String,require:true},
        categories:{type: Array},
    },
    {timestamps:true}
)
module.exports = mongoose.model("New",NewSchema);
