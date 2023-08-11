const mongoose = require("mongoose")
const CategoriesSchema = new mongoose.Schema(
    {
        title:{type:String,require:true,unique:true},
        img:{type:String,require:true},
        cat:{type: String},
    },
    {timestamps:true}
)
module.exports = mongoose.model("Categories",CategoriesSchema);
