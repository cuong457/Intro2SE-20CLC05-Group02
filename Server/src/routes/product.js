var express = require('express');
var router = express.Router();

const {
  getItems,
  getRecommend,
} = require('../app/controllers/ProductController');

router.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
});

// router.get('/recommend', getRecommend);
router.get('/', getItems);


module.exports = router;
