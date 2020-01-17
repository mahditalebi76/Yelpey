const router = require('express').Router();
const Sequelize = require('sequelize');
const authentication = require('./authentication')
const user = require('./user');
const state = require('./state');
const image = require('./image')
const address = require('./address');
const shop = require('./shop')
const category = require('./category');

router.use('/auth', authentication)
router.use('/user', user)
router.use('/state', state)
router.use('/image', image)
router.use('/address', address)
router.use('/shop', shop)
router.use('/category', category)
module.exports = router;