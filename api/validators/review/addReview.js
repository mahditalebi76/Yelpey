const Joi = require('@hapi/joi').extend(require('@hapi/joi-date'));

addReviewSchema = Joi.object().keys({
    id: Joi.number().required(),
    title: Joi.string().min(2).max(100).required(),
    content: Joi.string().min(2).required(),
    quality: Joi.number().min(0).max(5),
    behavior: Joi.number().min(0).max(5),
    speed: Joi.number().min(0).max(5),
    price: Joi.number().min(0).max(5),
});

module.exports = addReviewSchema;