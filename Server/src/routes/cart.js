var express = require('express');
var router = express.Router();

const {
  getCart,
} = require('../app/controllers/CartController');

router.get('/:id', getCart);

module.exports = router;