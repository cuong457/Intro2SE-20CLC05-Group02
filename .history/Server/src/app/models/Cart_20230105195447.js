const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ItemSchema = new Schema (
    {
        productId: {
            type: mongoose.Types.ObjectId,
            ref: "Product",
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



CartSchema.methods.getPopulatedCart = async function() {
    // populate product data in productId field
    const cartPopulatedPromises = this.items.map(async (item, index) => {
        return this.populate(`items.${index}.productId`);
    });

    // [{}, {}, {}]: array of carts populated with product data
    const carts = await Promise.all(cartPopulatedPromises);
    return carts[0];
}

module.exports = mongoose.model('Cart', CartSchema);
