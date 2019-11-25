const Joi = require('@hapi/joi');

loginSchema = Joi.object().keys({
    email: Joi.string().required(),
    newPassword: Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/).required(),
    forgotPasswordCode: Joi.required()
})
module.exports = loginSchema