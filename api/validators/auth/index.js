const Joi = require('@hapi/joi');
const registerSchema = require('./register');
const loginSchema = require('./login');
const emailSchema = require('./verifyEmail');
const forgotPassEmailSchema = require('./forgotPasswordEmail');
const newPasswordSchema = require('./newPassword');
const schema = {
    register: registerSchema,
    login: loginSchema,
    emailVerification: emailSchema,
    forgotPassEmail: forgotPassEmailSchema,
    newPassword: newPasswordSchema
};
module.exports = schema;