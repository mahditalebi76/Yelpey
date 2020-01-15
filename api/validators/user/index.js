const updateUserSchema = require('./updateUser')
const getUserInfo = require('./getUserInfo')
const followUser = require('./followUser');
const followers = require('./followers');
const following = require('./following');

const schema = {
    updateUser: updateUserSchema,
    getUserInfo: getUserInfo,
    followUser,
    followers,
    following
};

module.exports = schema;