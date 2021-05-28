const mongoose = require("../mongoose");

const schema = new mongoose.Schema({
  title: String,
  description: String,
  url: String,
  price: Number,
  oldPrice: Number,
  size: String,
  publication: Number,
  bestSeller: Boolean,
  stock: Number,
}, {
  timestamps: true
});

module.exports = mongoose.model('products', schema);
