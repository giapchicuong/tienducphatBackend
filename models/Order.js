const mongoose = require("mongoose");
const OrderSchema = new mongoose.Schema(
  {
    fullname: { type: String },
    email: { type: String },
    products: [
      {
        productId: {
          type: String,
        },
        productName: {
          type: String,
        },
        productImg: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    phone: { type: Number },
    fullname: { type: String },
    address: { type: Object },
    note: { type: Object },
    status: { type: String, default: "Nhận đơn hàng" },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Order", OrderSchema);
