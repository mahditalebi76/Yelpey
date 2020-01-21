const bcrypt = require('bcryptjs');
const randomstring = require('randomstring');
const userController = require('../user');
const emailVerificationMailer = require('../../middlewares/mails/emailVerification');
const db = require('../../../models/index');

const User = db.users;

module.exports.register = async (req, res) => {

    // {req body : 
    //     email,
    //     password,
    //     name
    // }
    User.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(user => {
            if (user) {
                // user with this email already exists
                return res.status(422).json({
                    error: 'email already exists'
                });
            } else {
                bcrypt.hash(req.body.password, 10, async (err, hash) => {
                    if (err) {
                        //some error output here
                        return res.status(500).json({
                            error: 'hashing error'
                        });
                    } else if (hash) {
                        let confirmationCode = await randomstring.generate({
                            length: 4,
                            charset: 'numeric'
                        });

                        User.create({
                                email: req.body.email,
                                password: hash,
                                confirmationCode,
                                firstName: req.body.firstName,
                                lastName: req.body.lastName,
                                avatarId: 1000
                            })
                            .then(async user => {
                                emailVerificationMailer.sendEmail(
                                    user.email,
                                    user.confirmationCode
                                );
                                return res.status(200).json({
                                    message: 'register done',
                                    userInfo: {
                                        id: user.id,
                                        email: user.email,
                                        firstName: user.firstName,
                                        lastName: user.lastName
                                    }
                                });
                            });
                    }
                });
            }
        });
};