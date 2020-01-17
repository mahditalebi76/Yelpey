const router = require('express').Router();
const validate = require('../middlewares/Joi');
const schemas = require('../validators/user');
const {
    getCategory
} = require('../controllers/category/getCategory');


router.get('/getCategories', getCategory);


module.exports = router