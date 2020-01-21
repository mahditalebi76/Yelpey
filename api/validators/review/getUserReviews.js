const Joi = require('@hapi/joi').extend(require('@hapi/joi-date'));

getUserReviewsSchema = Joi.object().keys({
    id: Joi.number().required()
});

module.exports = getUserReviewsSchema;