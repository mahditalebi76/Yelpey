const router = require('express').Router();
const validate = require('../middlewares/Joi');
const schemas = require('../validators/user');
const addressController = require('../controllers/address/addAddress');

router.post('/addAddress', addressController.addAddressReq);
router.get('/getAddresses', addressController.getAddresses);
module.exports = router