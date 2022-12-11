const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const crypto = require("crypto");
const bcrypt = require("bcryptjs");

const UserSchema = new Schema(
  {
    name: { type: String },
    password: { type: String, required: true },
    email: { type: String, required: true },
    role: { type: String, default: "user" },
    active: { type: Boolean, default: false },
    photo: { type: String },
  },
  {
    timestamps: true,
  }
);

// document middleware


module.exports = mongoose.model("User", UserSchema);
