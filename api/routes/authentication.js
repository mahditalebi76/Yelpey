const router = require('express').Router();
const passport = require('passport');
const schemas = require('../validators/auth')
const validate = require('../middlewares/Joi');
const register = require('../controllers/authentication/register').register;
const login = require('../controllers/authentication/login').login;
const emailVerification = require('../controllers/authentication/emailVerification').emailVerification;
const forgotPassword = require('../controllers/authentication/forgotPassword');

router.post('/register', validate(schemas.register), register);
router.post('/login', validate(schemas.login), login);
router.post('/verifyEmail', validate(schemas.emailVerification), emailVerification);
router.post('/forgotPasswordEmail', validate(schemas.forgotPassEmail), forgotPassword.sendEmail);
router.post('/newPassword', validate(schemas.newPassword), forgotPassword.newPassword);

module.exports = router