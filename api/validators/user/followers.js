const Joi = require('@hapi/joi').extend(require('@hapi/joi-date'));
followUserSchema = Joi.object().keys({
    id: Joi.number().integer().min(1)

});
module.exports = followUserSchema;