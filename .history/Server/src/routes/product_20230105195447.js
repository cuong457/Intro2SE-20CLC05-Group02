var express = require('express');
var router = express.Router();

const {
  getItems,
  getItemDetail,
} = require('../app/controllers/ProductController');

router.get('/:slug', getItemDetail);
router.get('/', getItems);


module.exports = router;
