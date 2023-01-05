const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema (
    {
        usn: { type: String, required: true },
        psw: { type: String, required: true },
        name: { type: String },
        photo: { type: String },
        status: { type: Number },
        type: { type: Number },
        sales: { type: Number },
        rvcount: { type: Number },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('User', UserSchema);
