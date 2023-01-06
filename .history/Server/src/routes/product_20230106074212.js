var express = require("express");
var router = express.Router();

const {
  getItems,
  getItemDetail,
} = require("../app/controllers/ProductController");

const { protect, restrictTo } = require("../app/controllers/AuthController");

router
  .route("/:slug")
  .get(getItemDetail)
  .patch([protect, updateItemQuantity])
  .delete([protect, deleteItem]);
router.get("/", getItems);

module.exports = router;
