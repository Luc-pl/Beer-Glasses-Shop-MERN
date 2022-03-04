/* eslint-disable linebreak-style */
const express = require('express');
const router = express.Router();

const User = require('../models/user.model');

router.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.id });

    if (!user) res.status(404).json({ user: 'Not found' });
    else res.json(user);
  }
  catch (err) {
    res.status(500).json(err);
  }
});
router.put('/users/:id', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.id });

    if (!user) res.status(404).json({ user: 'Not found' });
    else {
      const newCart = req.body;
      await User.updateOne({ email: req.params.id }, { cart: newCart });
      res.json('Done!');
    }
  }
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;