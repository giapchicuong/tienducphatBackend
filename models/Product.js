const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, require: true, unique: true },
    model: { type: String },
    code: { type: String },
    descSummary: { type: String },
    descDetails: { type: String },
    imgs: [{ type: String }],
    categories: { type: String },
    price: { type: String },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Product", ProductSchema);
