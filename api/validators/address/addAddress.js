const Joi = require('@hapi/joi').extend(require('@hapi/joi-date'));
followUserSchema = Joi.object().keys({
    id: Joi.number().optional(),
    lat: Joi.number().required(),
    lng: Joi.number().required(),
    postalCode: Joi.string().regex(/(?!(\d)\1{3})[13-9]{4}[1346-9][013-9]{5}/).required(),
    addressText: Joi.string().min(5).required(),
    cityId: Joi.number().integer().min(1).required()



});
module.exports = followUserSchema;