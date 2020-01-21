const Joi = require('@hapi/joi').extend(require('@hapi/joi-date'));

getShopCommentsSchema = Joi.object().keys({
    id: Joi.number().required()
});

module.exports = getShopCommentsSchema;