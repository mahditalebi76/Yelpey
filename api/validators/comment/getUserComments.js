const Joi = require('@hapi/joi').extend(require('@hapi/joi-date'));

getUserCommentsSchema = Joi.object().keys({
    id: Joi.number().required()
});

module.exports = getUserCommentsSchema;