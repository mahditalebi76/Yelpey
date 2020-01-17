const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../../../models');
const User = db.users;

const jwtSecret = process.env.JWT_SECRET;


exports.login = async (req, res) => {
    User.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(user => {
            bcrypt.compare(req.body.password, user.password, (err, correct) => {
                if (err) {
                    // password wrong
                    return res.status(500).json({
                        message: 'oops server error password comparation'
                    });
                } else if (correct) {
                    // password correct
                    const jwtPayload = {
                        id: user.id,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email
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
                            } else {
                                return res.status(200).json({
                                    token: encoded,
                                    id: user.id,
                                    firstName: user.firstName,
                                    lastName: user.lastName,
                                    email: user.email,
                                    avatarId: user.avatarId,
                                    phoneNumber: user.phoneNumber,
                                    sex: user.sex,
                                    addressId: user.addressId,
                                    birthday: user.birthday,
                                    nationalCode: user.nationalCode
                                });
                            }
                        }
                    );
                } else {
                    return res.status(500).json({
                        message: 'password incorrect'
                    });
                }
            });
        })
        .catch(err => {
            return res.status(500).json({
                message: 'user not found'
            });
        });
};