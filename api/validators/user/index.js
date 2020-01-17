const updateUserSchema = require('./updateUser')
const getUserInfo = require('./getUserInfo')
const followUser = require('./followUser');
const followers = require('./followers');
const following = require('./following');
const address = require('../address/addAddress');
const schema = {
    updateUser: updateUserSchema,
    getUserInfo: getUserInfo,
    followUser,
    followers,
    following,
    address
};

module.exports = schema;