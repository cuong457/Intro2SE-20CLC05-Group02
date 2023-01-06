const catchAsync = require("../../utils/catchAsync");
const AppError = require("../../utils/AppError");
const ProductModel = require('../models/Product');

exports.getItems = async function (req, res, next) {
    try {
        const product = await ProductModel.find({});
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

exports.getItemDetail = async function(req, res, next) {
    try {
        const product = await ProductModel.findOne({ slug: req.params.slug });
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ error: err });
    }
}