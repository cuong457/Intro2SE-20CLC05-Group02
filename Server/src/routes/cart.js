var express = require('express');
var router = express.Router();

const {
  getCart,
  addItem,
} = require('../app/controllers/CartController');

router.patch('/:id/add', addItem);
router.get('/:id', getCart);


module.exports = router;