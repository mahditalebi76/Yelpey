const Joi = require('@hapi/joi');

forgotPassEmailSchema = Joi.object().keys({
    email: Joi.string().required()
})
module.exports = forgotPassEmailSchema