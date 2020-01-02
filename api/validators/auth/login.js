const Joi = require('@hapi/joi');

loginSchema = Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required(),
})
module.exports = loginSchema