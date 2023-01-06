var express = require("express");
var router = express.Router();

const {
  getItems,
  getItemDetail,
} = require("../app/controllers/ProductController");

const { protect, restrictTo } = require("../app/controllers/AuthController");

router.get("/:slug", getItemDetail);
router.get("/", getItems);

module.exports = router;
