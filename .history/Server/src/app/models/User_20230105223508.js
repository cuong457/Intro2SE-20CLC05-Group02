const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    usn: { type: String },
    psw: { type: String },
    avt: { type: String },
    status: { type: Number },
    type: { type: Number },
    sales: { type: Number },
    rvcount: { type: Number },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);