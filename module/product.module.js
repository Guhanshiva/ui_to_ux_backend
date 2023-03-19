const mongoose = require("mongoose");
const productschema = new mongoose.Schema({
  category: {
    type: String,
    enum: [
      "Featured_Products",
      "Top_Products",
      "special_offers",
      "best_sellers",
    ],
  },
  image: {
    type: String,
    required: true,
  },
  sub_title: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  ratings: {
    type: String,
    required: true,
  },
  reviews: {
    type: String,
    required: true,
  },
  price_amount: {
    type: String,
    required: true,
  },
  discount_amount: {
    type: String,
  },
});
module.exports = mongoose.model("products", productschema);
