const router = require('express').Router();
const validate = require('../middlewares/Joi');
const schemas = require('../validators/user');
const passport = require('passport');
const upload = require('../middlewares/uploadMiddleware');
const {
    isOwner
} = require('../middlewares/isOwner');

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
} = require('../controllers/rate/rateShop');

const {
    updateShopInfo
} = require('../controllers/shop/updateShopInfo');

router.post(
    '/addShop',
    passport.authenticate('jwt', {
        session: false
    }), addShop)
router.post('/getShop', getShop)

router.post('/getAroundShops', getAroundShops)

router.patch('/updateShopInfo',
    passport.authenticate('jwt', {
        session: false
    }),
    isOwner,
    upload.single('shopImage'),
    updateShopInfo)

module.exports = router