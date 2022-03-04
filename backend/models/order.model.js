/* eslint-disable linebreak-style */
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
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
    },
    price: Number,
  }],
  bill: {
    type: Number,
    required: true,
  },
  date_added: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Order', orderSchema);