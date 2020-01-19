const router = require('express').Router();
const validate = require('../middlewares/Joi');
const schemas = require('../validators/user');
const passport = require('passport');
const upload = require('../middlewares/uploadMiddleware');
const {
    isOwner
} = require('../middlewares/isOwner');

const {
    addPost
} = require('../controllers/post/addPost');
const {
    getShopPosts
} = require('../controllers/post/getShopPosts');

router.post('/addPost',
    passport.authenticate('jwt', {
        session: false
    }),
    upload.single('image'),
    isOwner,
    addPost
)

router.post('/getShopPosts',
    passport.authenticate('jwt', {
        session: false
    }),
    getShopPosts)


module.exports = router