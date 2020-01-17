const router = require('express').Router();
const validate = require('../middlewares/Joi');
const schemas = require('../validators/user');
const addressController = require('../controllers/address/addAddress');
const passport = require('passport');
const addAddressController = require('../controllers/address/updateUserAddress');

router.patch('/updateUserAddress',
    passport.authenticate('jwt', {
        session: false
    }),
    validate(schemas.address),
    addAddressController.addUserAddress
);


module.exports = router