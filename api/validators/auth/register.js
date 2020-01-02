const Joi = require('@hapi/joi');

regiterSchema = Joi.object().keys({
    email: Joi.string().min(6).max(100).required().email(),
    password: Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/).required(),
    repeatPassword: Joi.string().required().valid(Joi.ref('password')),
    firstName: Joi.string().min(2).max(50).required(),
    lastName: Joi.string().min(1).max(50).required(),
})
module.exports = regiterSchema