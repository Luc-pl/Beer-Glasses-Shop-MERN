const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: {type: String},
  category: {type: String},
  price: { type: Number },
  gallery: {type: Array},
});

module.exports = mongoose.model('Product', productSchema);
