'use strict';
const bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [

      {
        id: 1,
        firstName: 'testA',
        lastName: 'testAA',
        email: 'a@a.com',
        password: bcrypt.hashSync('mmmmm5', salt),
        confirmationCode: '1234',
        createdAt: new Date(),
        updatedAt: new Date(),
        avatarId: 1000
      },
      {
        id: 2,
        firstName: 'testB',
        lastName: 'testBB',
        email: 'b@b.com',
        password: bcrypt.hashSync('mmmmm5', salt),
        confirmationCode: '1234',
        createdAt: new Date(),
        updatedAt: new Date(),
        avatarId: 1000

      },
      {
        id: 3,
        firstName: 'testC',
        lastName: 'testCC',
        email: 'c@c.com',
        password: bcrypt.hashSync('mmmmm5', salt),
        confirmationCode: '1234',
        createdAt: new Date(),
        updatedAt: new Date(),
        avatarId: 1000
      },
      {
        id: 4,
        firstName: 'testD',
        lastName: 'testDD',
        email: 'd@d.com',
        password: bcrypt.hashSync('mmmmm5', salt),
        confirmationCode: '1234',
        createdAt: new Date(),
        updatedAt: new Date(),
        avatarId: 1000
      },
      {
        id: 5,
        firstName: 'محمدحسین',
        lastName: 'عمرانی',
        email: 'omrani.mohammad77@gmail.com',
        password: bcrypt.hashSync('123e456', salt),
        confirmationCode: '1234',
        emailVerified: true,
        phoneNumber: '091013417',
        phoneVerified: true,
        sex: 'male',
        addressId: 5,
        birthday: '1998-05-04',
        nationalCode: '6590023387',
        createdAt: new Date(),
        updatedAt: new Date(),
        avatarId: 5
      },
      {
        id: 6,
        firstName: 'محمدرضا',
        lastName: 'دولتخواه',
        email: 'dolatkhah77@gmail.com',
        password: bcrypt.hashSync('mrd12121212', salt),
        confirmationCode: '1234',
        emailVerified: true,
        phoneNumber: '09142863057',
        phoneVerified: true,
        sex: 'male',
        addressId: 6,
        birthday: '1998-09-02',
        nationalCode: '1610382226',
        createdAt: new Date(),
        updatedAt: new Date(),
        avatarId: 6
      },
      {
        id: 7,
        firstName: 'شهاب',
        lastName: 'یوسفی',
        email: 'shahabyousefi.77@gmail.com',
        password: bcrypt.hashSync('sy12121212', salt),
        confirmationCode: '1234',
        emailVerified: true,
        phoneNumber: '09216873582',
        phoneVerified: true,
        sex: 'male',
        addressId: 7,
        birthday: '1998-06-07',
        nationalCode: '5000135482',
        createdAt: new Date(),
        updatedAt: new Date(),
        avatarId: 7
      },
      {
        id: 8,
        firstName: 'مهدی',
        lastName: 'طالبی',
        email: 'atrabiboy@gmail.com',
        password: bcrypt.hashSync('mt12121212', salt),
        confirmationCode: '1234',
        emailVerified: true,
        phoneNumber: '09304109693',
        phoneVerified: true,
        sex: 'male',
        addressId: 8,
        birthday: '1998-02-11',
        nationalCode: '4990147510',
        createdAt: new Date(),
        updatedAt: new Date(),
        avatarId: 8
      },
      {
        id: 9,
        firstName: 'وحید',
        lastName: 'فیروزیان',
        email: 'vahid.firoozian@gmail.com',
        password: bcrypt.hashSync('vf12121212', salt),
        confirmationCode: '1234',
        emailVerified: true,
        phoneNumber: '09392601723',
        phoneVerified: true,
        sex: 'male',
        addressId: 9,
        birthday: '1997-04-18',
        nationalCode: '0670619965',
        createdAt: new Date(),
        updatedAt: new Date(),
        avatarId: 9
      },
      {
        id: 10,
        firstName: 'سعید',
        lastName: 'آقابراریان',
        email: 'saeed@gmail.com',
        password: bcrypt.hashSync('mt12121212', salt),
        confirmationCode: '1234',
        emailVerified: true,
        phoneNumber: '09304109696',
        phoneVerified: true,
        sex: 'male',
        addressId: 10,
        birthday: '1998-02-11',
        nationalCode: '4990147516',
        createdAt: new Date(),
        updatedAt: new Date(),
        avatarId: 10
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};