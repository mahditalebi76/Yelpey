const Joi = require('@hapi/joi').extend(require('@hapi/joi-date'));

addCommentSchema = Joi.object().keys({
    id: Joi.number().required(),
    content: Joi.string().min(2).required()
});

module.exports = addCommentSchema;