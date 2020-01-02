const Joi = require('@hapi/joi');

loginSchema = Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/).required(),
    repeatPassword: Joi.string().required().valid(Joi.ref('password')),
    forgotPasswordCode: Joi.required()
})
module.exports = loginSchema