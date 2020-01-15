const Joi = require('@hapi/joi').extend(require('@hapi/joi-date'));
getUserInfoSchema = Joi.object().keys({
    id: Joi.number().integer().min(1)

});
module.exports = getUserInfoSchema;