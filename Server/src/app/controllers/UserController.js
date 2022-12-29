const UserModel = require('../models/User');

exports.getUsers = async function (req, res, next) {
    try {
        const user = await UserModel.find({});
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

exports.createUser = function (req, res, next) {
    const user = new UserModel(req.body);
    user.save()
        .then((newUser) => {
            res.json(200).json({
                message: "success",
                userId: newUser._id,
            });
        })
        .catch(next);
};
