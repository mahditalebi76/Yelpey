const Joi = require('@hapi/joi');

regiterSchema = Joi.object().keys({
    email: Joi.string().min(6).max(100).required().email(),
    password: Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/).required(),
    repeatPassword: Joi.ref('password'),
    name: Joi.string().min(2).max(50).optional(),
    phoneNumber: Joi.number().optional(),
    birthDate: Joi.date().optional(),
    sex: Joi.string().optional(),
    nationalCode: Joi.number().optional()
})
module.exports = regiterSchema