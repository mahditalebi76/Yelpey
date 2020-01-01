const bcrypt = require('bcryptjs');
const randomstring = require('randomstring');
const userController = require('../user');
const emailVerificationMailer = require('../../middlewares/mails/emailVerification');
const db = require('../../../models/index');
const User = db.users;

module.exports.userInfo = async (req, res) => {

    // {req body : 
    //     email,
    //     password,
    //     name
    // }

    User.update({})

};