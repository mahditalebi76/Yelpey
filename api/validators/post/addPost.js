const Joi = require('@hapi/joi').extend(require('@hapi/joi-date'));

addPostSchema = Joi.object().keys({
    id: Joi.number().required(),
    title: Joi.string().min(2).max(100).required(),
    content: Joi.string().min(2).required(),
});

module.exports = addPostSchema;