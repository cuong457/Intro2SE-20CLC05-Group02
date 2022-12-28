var express = require('express');
var router = express.Router();

const {
    getUsers,
    createUser,
} = require('../app/controllers/UserController');

router.post('/create', createUser);
router.get('/', getUsers);


module.exports = router;
