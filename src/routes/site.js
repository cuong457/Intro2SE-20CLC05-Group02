const express = require("express");
const router = express.Router();

const {
  getItems,
  getItemDetail,
} = require("../app/controllers/UserViewController");

router.get("/products/:slug", getItemDetail);
router.get("/products", getItems);

module.exports = router;
