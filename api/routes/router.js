const router = require('express').Router();

const authentication = require('./authentication')
const user = require('./user');
const state = require('./state');
const image = require('./image')
const address = require('./address');

router.use('/auth', authentication)
router.use('/user', user)
router.use('/state', state)
router.use('/image', image)
router.use('/address', address)

module.exports = router;