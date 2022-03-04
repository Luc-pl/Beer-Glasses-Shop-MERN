/* eslint-disable linebreak-style */
const { Router } = require('express');
const cartController = require('../controllers/cart.controllers');
const router = Router();

router.get('/cart/:id',cartController.get_cart_items);
router.post('/cart/:id',cartController.add_cart_item);
router.put('/cart/:id',cartController.update_cart_item);
router.delete('/cart/:userId/:_id',cartController.delete_item);

module.exports = router;