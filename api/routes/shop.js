const router = require('express').Router();
const validate = require('../middlewares/Joi');
const schemas = require('../validators/user');
const passport = require('passport')
const {
    addShop
} = require('../controllers/shop/addShop');
const {
    getShop
} = require('../controllers/shop/getShop');
const {
    getAroundShops
} = require('../controllers/shop/getAroundShops');
const {
    rateShop
} = require('../controllers/shop/rateShop');

router.post(
    '/addShop',
    passport.authenticate('jwt', {
        session: false
    }), addShop)
router.post('/getShop', getShop)
router.post('/getAroundShops', getAroundShops)

router.post('/rateShop',
    passport.authenticate('jwt', {
        session: false
    }),
    rateShop)

module.exports = router