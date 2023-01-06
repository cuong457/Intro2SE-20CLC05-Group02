const UserModel = require('../models/User');

exports.getUsers = async function (req, res, next) {
    try {
        const user = await UserModel.find({});
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};


// usn: input_list.usn_input.val(),
// psw: input_list.psw_input.val(),
// status: STATUS.NORMAL,
// type: TYPE.NORMAL_USER,
exports.createUser = function (req, res, next) {
    const allowUserType = ["user", "admin", "seller"];
    const user = new UserModel(req.body);
    user.save()
        .then((newUser) => {
            res.json(200).json({
                message: "success",
                userId: newUser._id,
            });
        })
        .catch(next);

    
    const { usn, psw, status, type } = req.body;

    if (
        !usn ||
        usn.trim().length === 0 ||
        !psw || 
        psw.length < 6
    ) {
        return next(new AppError(400, "Invalid username, password and password"));
    }

    if (!type || type.trim().length === 0 || allowUserType.includes(type)) {
        return next(new AppError(400, "type is either user, admin, seller"));
    }
    
    // 2) check if email has existed
    const user = await UserModel.findOne({ email });
    
    if (user) {
        return next(
        new AppError(400, "Email has already existed, please try another email")
        );
    }
    
    // 3) store user
    const storedUser = await UserModel.create({
        name,
        email,
        password,
    });
    
    // 3.1) create cart
    const cart = await CartModel.create({
        userId: storedUser._id,
        products: [],
    });
    
    // 4) send email
    try {
        const verifyToken = storedUser.createVerifyToken();
        await storedUser.save({ validateBeforeSave: false });
        const emailObj = new Email(
        storedUser,
        `${req.protocol}://${req.get("host")}/api/v1/auth/verify/${verifyToken}`
        );
        await emailObj.send("WELCOME AND PLEASE VERIFY YOUR EMAIL");
    } catch (err) {
        storedUser.emailVerifyToken = undefined;
        storedUser.emailVerifyTokenExpires = undefined;
        await storedUser.save({ validateBeforeSave: false });
    
        return next(new AppError(500, err.message));
    }
    
    // 5) send back to client
    res.status(200).json({
        status: "success",
        data: {
        storedUser,
        },
    });
};