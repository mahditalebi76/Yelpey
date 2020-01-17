const router = require('express').Router();
const passport = require('passport');
userController = require('../controllers/user.js');
upadeUserInfo = require('../controllers/user/userInfo').userInfo;
const validate = require('../middlewares/Joi');
const schemas = require('../validators/user');
const upload = require('../middlewares/uploadMiddleware');
getUserInfo = require('../controllers/user/getUserInfo').getUserInfo;
const followController = require('../controllers/user/follow.js')

router.get('/findAllUsers', userController.findAllUsers);

router.post('/getUserInfo', validate(schemas.getUserInfo), getUserInfo);

router.patch('/updateUser',
    passport.authenticate('jwt', {
        session: false
    }),
    validate(schemas.updateUser),
    upload.single('avatar'),
    upadeUserInfo)

router.post('/followUser',
    passport.authenticate('jwt', {
        session: false
    }),
    validate(schemas.followUser),
    followController.follow
);

router.post('/followers',
    validate(schemas.followers),
    followController.followers
);

router.post('/following',
    validate(schemas.following),
    followController.following
);




module.exports = router