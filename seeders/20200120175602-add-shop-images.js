'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('images', [{
        id: 2000,
        uploaderId: 1,
        name: 'default-shop-image',
        path: '/public/shops/default.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2001,
        uploaderId: 1,
        name: 'shop2001',
        path: '/public/shops/shop2001.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2002,
        uploaderId: 1,
        name: 'shop2002',
        path: '/public/shops/shop2002.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2003,
        uploaderId: 1,
        name: 'shop2003',
        path: '/public/shops/shop2003.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2004,
        uploaderId: 2,
        name: 'shop2004',
        path: '/public/shops/shop2004.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2005,
        uploaderId: 2,
        name: 'shop2005',
        path: '/public/shops/shop2005.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2006,
        uploaderId: 2,
        name: 'shop2006',
        path: '/public/shops/shop2006.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2007,
        uploaderId: 3,
        name: 'shop2007',
        path: '/public/shops/shop2007.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};