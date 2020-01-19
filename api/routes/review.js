const router = require('express').Router();
const validate = require('../middlewares/Joi');
const schemas = require('../validators/user');
const passport = require('passport');
const {
    addReview
} = require('../controllers/review/addReview');
const {
    getShopReviews
} = require('../controllers/review/getShopReviews');
const {
    getUserReviews
} = require('../controllers/review/getUserReviews');

router.post('/addReview',
    passport.authenticate('jwt', {
        session: false
    }),
    addReview
)
router.post('/getShopReviews',
    passport.authenticate('jwt', {
        session: false
    }),
    getShopReviews)
router.post('/getUserReviews',
    passport.authenticate('jwt', {
        session: false
    }),
    getUserReviews)


module.exports = router