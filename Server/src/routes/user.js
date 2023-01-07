var express = require("express");
var router = express.Router();

const {
  getUsers,
  createUser,
  updateMe,
  updatePassword,
  protect,
  restrictTo,
  createJwt,
} = require("../app/controllers/UserController");

// register
router.post("/create", createUser);
router.post("/create-jwt", createJwt);

// update profile
router.patch("/me", [protect, updateMe]);
router.patch("/password", [protect, updatePassword]);

//
router.get("/", getUsers);

module.exports = router;
