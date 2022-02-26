const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  status: { type: String, required: true },
  title: { type: String, required: true },
  text: { type: String, required: true },
  price: { type: Number },
});

module.exports = mongoose.model('Product', productSchema);
