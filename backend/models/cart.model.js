/* eslint-disable linebreak-style */
const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  products: [{
    _id: {
      type: String,
    },
    name: String,
    quantity: {
      type: Number,
      required: true,
      min: [1, 'Quantity can not be less then 1.'],
      default: 1,
    },
    price: Number,
  }],
  bill: {
    type: Number,
    required: true,
    default: 0,
  },
});

module.exports = mongoose.model('Cart', cartSchema);