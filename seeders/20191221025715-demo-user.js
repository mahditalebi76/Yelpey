'use strict';
const bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [

      {
        firstName: 'testA',
        lastName: 'testAA',
        email: 'a@a.com',
        password: bcrypt.hashSync('mmmmm5', salt),
        confirmationCode: '1234',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'testB',
        lastName: 'testBB',
        email: 'b@b.com',
        password: bcrypt.hashSync('mmmmm5', salt),
        confirmationCode: '1234',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'testC',
        lastName: 'testCC',
        email: 'c@c.com',
        password: bcrypt.hashSync('mmmmm5', salt),
        confirmationCode: '1234',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'testD',
        lastName: 'testDD',
        email: 'd@d.com',
        password: bcrypt.hashSync('mmmmm5', salt),
        confirmationCode: '1234',
        createdAt: new Date(),
        updatedAt: new Date()
      },



    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};