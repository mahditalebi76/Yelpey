const router = require('express').Router();
const validate = require('../middlewares/Joi');
const schemas = require('../validators/user');
const stateController = require('../controllers/state/states')
const geo = require('../controllers/geo')

router.get('/getStates', stateController.getStates);
router.get('/getCities', stateController.getCities);
router.get('/getStatesCities', stateController.getStatesCities);
router.post('/addCordinate', geo.addCordinate)
router.get('/getAroundShops', geo.getAroundShops)

module.exports = router