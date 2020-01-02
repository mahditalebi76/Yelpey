const router = require('express').Router();
const passport = require('passport');
userController = require('../controllers/user.js');
upadeUserInfo = require('../controllers/user/userInfo').userInfo;
const validate = require('../middlewares/Joi');
const schemas = require('../validators/user');

router.get('/findAllUsers', userController.findAllUsers);
router.post('/findUser', userController.findUserReq);
router.patch('/updateUser',
    passport.authenticate('jwt', {
        session: false
    }),
    validate(schemas.updateUser),
    upadeUserInfo)
module.exports = router