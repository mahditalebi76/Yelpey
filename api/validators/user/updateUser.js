const Joi = require('@hapi/joi').extend(require('@hapi/joi-date'));
updateUserSchema = Joi.object().keys({
	firstName: Joi.string()
		.min(2)
		.max(50),
	lastName: Joi.string()
		.min(1)
		.max(50),

	phoneNumber: Joi.string()
		.regex(/09(0[1-2]|1[0-9]|3[0-9]|2[0-1])-?[0-9]{3}-?[0-9]{4}/),

	sex: Joi.string().valid('male', 'female', 'other'),

	birthday: Joi.date()
		.format('YYYY-MM-DD'),

	nationalCode: Joi.string().length(10)
});
module.exports = updateUserSchema;