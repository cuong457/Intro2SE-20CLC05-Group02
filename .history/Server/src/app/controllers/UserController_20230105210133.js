const UserModel = require("../models/User");
const jwt = require("jsonwebtoken");
const catchAsync = require("../../utils/catchAsync");
const AppError = require("../../utils/AppError");

const signToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, req, res, redirect = false) => {
  // 1) create token
  const token = signToken(user._id);

  // 2) add token to cookies
  const cookieOptions = {
    // milliseconds
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  // if (process.env.NODE_ENV === "production") {
  //   cookieOptions["secure"] = true;
  // }

  res.cookie("jwt", token, cookieOptions);

  // 3) send res through api
  if (!redirect) {
    res.status(200).json({
      status: "success",
      token,
      data: {
        user,
      },
    });
  } else {
    res.redirect("/");
  }
};

exports.getUsers = catchAsync(async function (req, res, next) {
  try {
    const user = await UserModel.find({});
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

// usn: input_list.usn_input.val(),
// psw: input_list.psw_input.val(),
// status: STATUS.NORMAL,
// type: TYPE.NORMAL_USER,
exports.createUser = catchAsync(async function (req, res, next) {
  const allowUserType = ["user", "admin", "seller"];

  const { usn, psw, status, type } = req.body;

  if (!usn || usn.trim().length === 0 || !psw || psw.length < 6) {
    return next(new AppError(400, "Invalid username and password"));
  }

  if (!type || type.trim().length === 0 || allowUserType.includes(type)) {
    return next(new AppError(400, "type is either user, admin, seller"));
  }

  // 2) check if email has existed
  const user = await UserModel.findOne({ usn });

  if (user) {
    return next(
      new AppError(
        400,
        "Username has already existed, please try another email"
      )
    );
  }

  // 3) store user
  const storedUser = await UserModel.create({
    usn,
    psw,
  });

  // 3.1) create cart
  const cart = await CartModel.create({
    userId: storedUser._id,
    items: [],
  });

  console.log("send token");
  // 4) send back to client
  createSendToken(storedUser, req, res);
});
