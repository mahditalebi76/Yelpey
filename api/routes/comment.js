const router = require('express').Router();
const validate = require('../middlewares/Joi');
const schemas = require('../validators/user');
const passport = require('passport');
const {
    addComment
} = require('../controllers/comment/addComment');
const {
    getShopComments
} = require('../controllers/comment/getShopComments');
const {
    getUserComments
} = require('../controllers/comment/getUserComments');

router.post('/addComment',
    passport.authenticate('jwt', {
        session: false
    }),
    addComment
)
router.post('/getShopComments',
    passport.authenticate('jwt', {
        session: false
    }),
    getShopComments)
router.post('/getUserComments',
    passport.authenticate('jwt', {
        session: false
    }),
    getUserComments)


module.exports = router