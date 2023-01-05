const catchAsync = require("../../utils/catchAsync");
const AppError = require("../../utils/AppError");
const CartModel = require('../models/Cart');

exports.getCart = catchAsync(async function(req, res, next) {
    let cart = await CartModel.findOne({ user: req.params.id });
    if (cart) {
        cart = await cart.getPopulatedCart();
    }

    res.status(200).json(cart);
});

exports.addItem = catchAsync(async function(req, res, next) {
    let cart = await CartModel.findOne({ user: req.params.id });

    console.log(req.body);

    // if (cart) {
    //     await cart.addItemToCart(req.body.id , 1);
    // }

    res.status(200).json({
        message: "success"
    });
});