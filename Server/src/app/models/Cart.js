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

CartSchema.methods.addItemToCart = async function(productId, quantity) {
    try {
        let productItemIndex = this.items.findIndex((prod) => {
            // parse ObjectId to String
            return String(prod.productId) === productId;
        });
        let newUpdatedItem = null;
        // if item exists
        if (productItemIndex !== -1) {
            newUpdatedItem = this.items[productItemIndex];
            newUpdatedItem.quantity += quantity;
            this.items[productItemIndex] = newUpdatedItem;
        } 
        // if item does not exist
        else {
            newUpdatedItem = { productId, quantity };
            this.items.push(newUpdatedItem);
        }

        const newCart = await this.save();
        return newCart;
    } catch(err) {
        console.log(err);
        return null;
    }
}

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
