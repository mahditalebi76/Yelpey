const router = require('express').Router();
const validate = require('../middlewares/Joi');
const schemas = require('../validators/user');
const addressController = require('../controllers/address/addAddress');
const passport = require('passport');
const {
    addUserAddress
} = require('../controllers/address/updateUserAddress');

const {
    addShopAddress
} = require('../controllers/address/updateShopAddress')
const {
    isOwner
} = require('../middlewares/isOwner');


router.patch('/updateUserAddress',
    passport.authenticate('jwt', {
        session: false
    }),
    validate(schemas.address),
    addUserAddress
);

router.patch('/updateShopAddress',
    passport.authenticate('jwt', {
        session: false
    }),
    isOwner,
    validate(schemas.address),
    addShopAddress
);




module.exports = router