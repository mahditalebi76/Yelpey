const router = require('express').Router();
const validate = require('../middlewares/Joi');
const imagecontroller = require('../controllers/image/imageInfo')

router.post('/getImageInfo', imagecontroller.imageInfo);

module.exports = router