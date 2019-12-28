const bcrypt = require('bcryptjs');
const randomstring = require('randomstring');
const userController = require('../user');
const forgotPasswordMailer = require('../../middlewares/mails/forgotPassword');
const db = require('../../../models');
const User = db.users;

module.exports.sendEmail = async (req, res) => {
    userController
        .findUser({
            email: req.body.email
        })
        .then(async user => {
            let forgotPasswordCode = await randomstring.generate({
                length: 6
            });
            await userController
                .updateUser(user.userId, {
                    forgotPasswordCode
                })
                .then(async updated => {
                    await forgotPasswordMailer.sendEmail(
                        user.email,
                        user.forgotPasswordCode
                    );
                    return res.status(200).json({
                        message: 'email sent. use the code sent to your email to choose a new password'
                    });
                });
        })
        .catch(err => {
            return res.status(404).json({
                error: 'email not found2',
                err
            });
        });
};

module.exports.newPassword = async (req, res) => {
    User.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(user => {
            if (user.forgotPasswordCode == req.body.forgotPasswordCode) {
                bcrypt.compare(req.body.password, user.password, (err, correct) => {
                    if (err) {
                        return res.status(500).json({
                            error: "server error: comparing forgot code failed"
                        })
                    } else if (correct) {
                        return res.status(422).json({
                            error: "new password can't be same as old password "
                        });
                    } else {
                        userController
                            .updateUser(user.userId, {
                                password: req.body.password,
                                forgotPasswordCode: null
                            })
                            .then(updated => {
                                return res.status(200).json({
                                    message: 'password updated'
                                });
                            });
                    }
                });
            } else {
                return res.status(421).json({
                    error: 'forgotPasswordCode is incorrect'
                });
            }
        })
        .catch(err => {
            return res.status(404).json({
                error: 'email not found'
            })
        });
};