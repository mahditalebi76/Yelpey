const router = require('express').Router();
const passport = require('passport');
userController = require('../controllers/user.js');

router.get('/findAllUsers', userController.findAllUsers);
router.post('/findUser', userController.findUserReq);
router.patch('/updateUser', userController.updateUserReq)
module.exports = router