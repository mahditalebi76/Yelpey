const Joi = require('@hapi/joi').extend(require('@hapi/joi-date'));

getShopReviewsSchema = Joi.object().keys({
    id: Joi.number().required()
});

module.exports = getShopReviewsSchema;