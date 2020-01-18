const router = require('express').Router();
const validate = require('../middlewares/Joi');
const schemas = require('../validators/user');
const passport = require('passport');
const upload = require('../middlewares/uploadMiddleware');

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
const {
    getAllUserRates
} = require('../controllers/rate/allUserRates')
const {
    getUserShopRate
} = require('../controllers/rate/userShopRate');

router.post('/rateShop',
    passport.authenticate('jwt', {
        session: false
    }),
    rateShop)

router.post('/getUserShopRate',
    passport.authenticate('jwt', {
        session: false
    }),
    getUserShopRate)

router.get('/getAllUserRates',
    passport.authenticate('jwt', {
        session: false
    }),
    getAllUserRates)



module.exports = router