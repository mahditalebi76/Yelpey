const router = require('express').Router();
const validate = require('../middlewares/Joi');
const schemas = require('../validators/review');
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
    validate(schemas.addReview),
    addReview
)
router.post('/getShopReviews',
    validate(schemas.getShopReviews),
    getShopReviews)


router.post('/getUserReviews',
    validate(schemas.getUserReviews),
    getUserReviews)


module.exports = router