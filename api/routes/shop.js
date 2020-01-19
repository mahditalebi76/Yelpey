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
    getShopsByCity
} = require('../controllers/shop/shopByCity');

const {
    updateShopInfo
} = require('../controllers/shop/updateShopInfo');

const {
    getAddresses
} = require('../controllers/address/getAddresses');

const {
    getShopByCategory
} = require('../controllers/shop/getShopByCategory');

const {
    getShopByrate
} = require('../controllers/shop/getShopByrate')

const {
    superSearch
} = require('../controllers/shop/superSearch')



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
    upload.single('shopImage'),
    isOwner,
    updateShopInfo)

router.post('/getShopsByCity', getShopsByCity)

router.post('/getShopByCategory', getShopByCategory)

router.post('/getShopByrate', getShopByrate)

router.post('/superSearch',
    passport.authenticate('jwt', {
        session: false
    }), superSearch)


module.exports = router