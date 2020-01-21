const Joi = require('@hapi/joi').extend(require('@hapi/joi-date'));

getShopPostsSchema = Joi.object().keys({
    id: Joi.number().required()
});

module.exports = getShopPostsSchema;