const Joi = require('@hapi/joi').extend(require('@hapi/joi-date'));
addAddressSchema = Joi.object().keys({
    id: Joi.number().optional(),
    lat: Joi.number().required(),
    lng: Joi.number().required(),
    postalCode: Joi.string().required(),
    addressText: Joi.string().min(5).required(),
    cityId: Joi.number().integer().min(1).required()



});
module.exports = addAddressSchema;