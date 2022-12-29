const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ItemSchema = new Schema (
    {
        productId: {
            type: Schema.Types.ObjectId,
            ref: 'Product',
            required: [true, "an item should have productId"],
        },
        quantity: {
            type: Number,
            required: true,
            min: [1, "Quantity must be greater than 1"]
        },
    }
)

const CartSchema = new Schema (
    {
        user: { 
            type: mongoose.Types.ObjectId,
            required: true,
            ref: "User",
        },
        items: [ItemSchema]
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Cart', CartSchema);
