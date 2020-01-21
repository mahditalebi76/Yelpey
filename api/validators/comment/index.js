const addComment = require('./addComment')
const getShopComments = require('./getShopComments')
const getUserComments = require('./getUserComments');
const schema = {
    addComment,
    getShopComments,
    getUserComments
};
module.exports = schema;