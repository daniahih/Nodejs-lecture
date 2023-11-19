const mongoose = require("mongoose");
const itemShema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please add name "],
    },
    itemImage: {
      type: String,
    },
    rating: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    itemPrice: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("items", itemShema);
