const catchAsync = require("../../utils/catchAsync");
const AppError = require("../../utils/AppError");
const mongoose = require("mongoose");
const Product = require("../models/Product");
const {
  multipleMongooseToObject,
  mongooseToObject,
} = require("../../utils/mongoose");

// [GET] /products/:slug
exports.getItemDetail = catchAsync( async (req, res, next) => {
    const product = await Product.findOne({ slug: req.params.slug });

    if(!product) {
        return next(new AppError(400, "Product unavailable"));
    }

    const recommend = await Product.find({category: { $regex: product.category[0], $options: "i" }})

    res.json({
        recommend,
        food: mongooseToObject(product),
    });
});

// [GET] /products
exports.getItems = async function (req, res, next) {
  const options = {};
  if (req.query.hasOwnProperty("_search"))
    Object.assign(options, {
      name: { $regex: req.query._search, $options: "i" },
    });

  if (req.query.hasOwnProperty("priceRange")) {
    const [from, to] = req.query.priceRange.split(",");
    options["price"] = { $gte: +from * 1000, $lte: +to * 1000 };
  }

  if (req.query.hasOwnProperty("manufacturer")) {
    const manufacturer = req.query.manufacturer;
    const manufacurerQuery = manufacturer.replaceAll("_", " ");
    options["manufacturer"] = manufacurerQuery;
  }

  if (req.query.hasOwnProperty("category")) {
    const category = req.query.category;
    const categoryQuery = category.replaceAll("_", " ");
    options["category"] = { $regex: categoryQuery, $options: "i" };
  }

  const products = await Product.find(options).sortable(req);

  res.render("products", {
    foods: multipleMongooseToObject(products),
    restaurant_logo,
  });
};

// [POST] /products/create
exports.addProduct = async (req, res, next) => {

};