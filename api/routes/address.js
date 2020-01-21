const router = require('express').Router();
const validate = require('../middlewares/Joi');
const schema = require('../validators/address/addAddress');
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
    validate(schema),
    addUserAddress
);

router.patch('/updateShopAddress',
    passport.authenticate('jwt', {
        session: false
    }),
    isOwner,
    validate(schema),
    addShopAddress
);




module.exports = router