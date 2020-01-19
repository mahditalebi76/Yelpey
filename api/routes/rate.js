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
    getAllUserrates
} = require('../controllers/rate/allUserrates')
const {
    getUserShoprate
} = require('../controllers/rate/userShoprate');

router.post('/rateShop',
    passport.authenticate('jwt', {
        session: false
    }),
    rateShop)

router.post('/getUserShoprate',
    passport.authenticate('jwt', {
        session: false
    }),
    getUserShoprate)

router.get('/getAllUserrates',
    passport.authenticate('jwt', {
        session: false
    }),
    getAllUserrates)



module.exports = router