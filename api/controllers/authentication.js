const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const randomstring = require('randomstring');
const User = require('../../db/models/User');
const userController = require('./user');
const emailVerificationMailer = require('../middlewares/mails/emailVerification');
const forgotPasswordMailer = require('../middlewares/mails/forgotPassword');

// const mailController = require('../mailController');

const jwtSecret = process.env.JWT_SECRET;

module.exports.register = async (req, res) => {
    userController.findUser({
        email: req.body.email
    }).then(user => {
        if (user) {
            return res.status(422).json({
                error: "email already exists"
            })
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
                    userController.createUser({
                        email: req.body.email,
                        password: hash,
                        confirmationCode,
                        name: req.body.name,
                        phoneNumber: req.body.phoneNumber,
                        birthDate: req.body.birthDate,
                        sex: req.body.sex,
                        nationalCode: req.body.nationalCode


                    }).then(async user => {
                        await emailVerificationMailer.sendEmail(user.email, user.confirmationCode)
                        return res.status(200).json({
                            message: 'register done',
                            user
                        });
                    });
                }
            });
        }
    })
};

module.exports.login = async (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(user => {
        bcrypt.compare(req.body.password, user.password, (err, correct) => {
            if (err) {
                return res.status(500).json({
                    message: 'wrong password'
                });
            } else if (correct) {
                if (!user.emailConfirmed) {
                    return res.status(401).json({
                        error: "email not confirmed"
                    })
                }
                if (user.emailConfirmed) {
                    const jwtPayload = {
                        email: user.email,
                        password: user.password
                    };
                    jwt.sign(
                        jwtPayload,
                        jwtSecret, {
                            expiresIn: '24h'
                        },
                        (err, encoded) => {
                            if (err) {
                                return res.status(500).json({
                                    err,
                                    message: 'jwt encoding failed'
                                });
                            } else if (correct) {
                                return res.status(200).json({
                                    token: encoded
                                });
                            }
                        }
                    );
                }
            }
        });
    });
};


module.exports.emailVerification = async (req, res) => {

    userController.findUser({
            email: req.body.email
        }).then(async user => {
            if (user.emailConfirmed) {
                return res.status(421).json({
                    error: "user already confirmed"
                })
            } else {
                if (user.confirmationCode == req.body.confirmationCode) {
                    await userController.updateUser(user.userId, {
                        emailConfirmed: true,
                        confirmationCode: null,
                    })
                    return res.status(200).json({
                        message: "email verification complete"
                    })
                } else {
                    return res.status(422).json({
                        error: "confirmation code is wrong"
                    })
                }
            }
        })
        .catch(err => {
            return res.status(404).json({
                error: "email not found"
            })
        })
}

module.exports.forgotPasswordEmail = async (req, res) => {
    userController.findUser({
            email: req.body.email
        })
        .then(async user => {
            let forgotPasswordCode = await randomstring.generate({
                length: 6,

            });
            await userController.updateUser(user.userId, {
                forgotPasswordCode
            }).then(async updated => {
                await forgotPasswordMailer.sendEmail(user.email, user.forgotPasswordCode)
                return res.status(200).json({
                    message: "email sent. use the code sent to your email to choose a new password"
                })
            })

        })
        .catch(err => {
            return res.status(404).json({
                error: "email not found",
                err
            })
        })
}

module.exports.newPassword = async (req, res) => {
    userController.findUser({
            email: req.body.email
        }).then(user => {
            if (user.forgotPasswordCode == req.body.forgotPasswordCode) {
                bcrypt.compare(req.body.newPassword, user.password, (err, correct) => {
                    if (correct) {
                        return res.status(422).json({
                            error: "new password can't be same as old password :)"
                        })
                    } else {
                        userController.updateUser(user.userId, {
                            password: req.body.newPassword,
                            forgotPasswordCode: null
                        }).then(updated => {
                            return res.status(200).json({
                                message: "password updated"
                            })
                        })
                    }
                })
            } else {
                return res.status(421).json({
                    error: "forgotPasswordCode is incorrect"
                })
            }
        })
        .catch(err => {
            error: "email not found"
        })
}