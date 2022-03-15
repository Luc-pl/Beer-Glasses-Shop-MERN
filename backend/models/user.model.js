/* eslint-disable linebreak-style */
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Required email address'],
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Wrong e-mail'],
  },
  products: { type: Array },
  cart: { type: Array },
});

module.exports = mongoose.model('User', userSchema);