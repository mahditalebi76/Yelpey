const router = require('express').Router();
const passport = require('passport');
userController = require('../controllers/user.js');
upadeUserInfo = require('../controllers/user/userInfo').userInfo;
const validate = require('../middlewares/Joi');
const schemas = require('../validators/user');
const upload = require('../middlewares/uploadMiddleware');
const {
    getUserInfo,
    getSelfInfo
} = require('../controllers/user/getUserInfo');
const followController = require('../controllers/user/follow.js')
const {
    getUserShops
} = require('../controllers/user/getUserShops');
router.get('/findAllUsers', userController.findAllUsers);

router.post('/getUserInfo', validate(schemas.getUserInfo), getUserInfo);

router.post('/getSelfInfo',
    passport.authenticate('jwt', {
        session: false
    }),
    validate(schemas.getUserInfo), getSelfInfo);



router.patch('/updateUser',
    passport.authenticate('jwt', {
        session: false
    }),
    upload.single('avatar'),
    validate(schemas.updateUser),
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

router.get('/getUserShops',
    passport.authenticate('jwt', {
        session: false
    }),
    getUserShops)


module.exports = router