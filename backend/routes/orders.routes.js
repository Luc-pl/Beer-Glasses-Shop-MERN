/* eslint-disable linebreak-style */
const express = require('express');
const router = express.Router();

const Order = require('../models/order.model');
const User = require('../models/user.model');

router.post('/orders', async (req, res) => {
  try {
    const { value, status, products, contact } = req.body;

    if (!value || !status || !products || !contact) {
      throw new Error('Wrong data');
    } else {
      const newOrder = new Order(req.body);
      await newOrder.save();

      const user = await User.findOne({ email: req.body.contact.email });

      if (user) {
        const newProducts = [...user.products, ...req.body.products.map(({ productId }) => productId)];
        await User.updateOne({ email: req.body.contact.email }, { products: newProducts });
      } else {
        const email = req.body.contact.email;
        const products = req.body.products.map(({ productId }) => productId);
        const newUser = new User({ email, products });
        await newUser.save();
      }
      res.json(newOrder);
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

module.exports = router;