const Joi = require('@hapi/joi').extend(require('@hapi/joi-date'));

addRateSchema = Joi.object().keys({
    shopId: Joi.number().required(),
    stars: Joi.number().min(0).max(5),
});

module.exports = addRateSchema;