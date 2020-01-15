const router = require('express').Router();
const validate = require('../middlewares/Joi');
const schemas = require('../validators/user');
const imagecontroller = require('../controllers/image/imageInfo')

router.get('/getImageInfo', imagecontroller.imageInfo);

module.exports = router