/* eslint-disable linebreak-style */
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  value: { type: Number, required: true },
  status: { type: String, required: [true, 'Status required'], enum: ['draft', 'ordered', 'closed'] },
  products: { type: Array, required: true },
  contact: {
    email: {
      type: String,
      required: [true, 'insert e-mail'],
      match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Wrong e-mail'],
    },
    name: { type: String, required: [true, 'insert name'], minlength: 2, maxlength: 50 },
    privacy: { type: Boolean, required: [true, 'accept the data processing'] },
    terms: { type: Boolean, required: [true, 'accept the regulamin'] },
  },
});

module.exports = mongoose.model('Order', orderSchema);