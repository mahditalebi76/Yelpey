const router = require('express').Router();
const passport = require('passport');
const schemas = require('../validators/schemas');
const middleware = require('../middlewares/Joi');
authenticationController = require('../controllers/authentication');

router.post('/register', middleware(schemas.register), authenticationController.register);
router.post('/login', middleware(schemas.login), authenticationController.login);
router.post('/verifyEmail', middleware(schemas.emailVerification), authenticationController.emailVerification);
router.post('/forgotPasswordEmail', middleware(schemas.forgotPassEmail), authenticationController.forgotPasswordEmail);
router.post('/newPassword', middleware(schemas.newPassword), authenticationController.newPassword);

module.exports = router