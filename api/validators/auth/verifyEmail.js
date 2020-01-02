const Joi = require('@hapi/joi');

emailSchema = Joi.object().keys({
    email: Joi.string().required(),
    confirmationCode: Joi.number().required()
})
module.exports = emailSchema