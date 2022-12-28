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

// exports.getRecommend = async function (req, res, next) {
//     try {
//         const recommend = await ProductModel.aggregate([{ $sample: { size: 6 } }]);
//         res.status(200).json(recommend);
//     } catch (err) {
//         res.status(500).json({ error: err });
//     }
// };