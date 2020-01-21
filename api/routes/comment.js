const router = require('express').Router();
const validate = require('../middlewares/Joi');
const schemas = require('../validators/comment');
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
    validate(schemas.addComment),
    addComment
)


router.post('/getShopComments',
    validate(schemas.getShopComments),
    getShopComments)


router.post('/getUserComments',
    validate(schemas.getUserComments),

    getUserComments)


module.exports = router