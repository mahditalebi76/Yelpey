'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('images', [{
        id: 1000,
        uploaderId: 1,
        name: 'default-avatar',
        path: '/public/avatars/default.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        uploaderId: 5,
        name: 'user5.jpg',
        path: '/public/avatars/user5.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        uploaderId: 6,
        name: 'user6.jpg',
        path: '/public/avatars/user6.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        uploaderId: 7,
        name: 'user7.jpg',
        path: '/public/avatars/user7.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        uploaderId: 8,
        name: 'user8.jpg',
        path: '/public/avatars/user8.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        uploaderId: 9,
        name: 'user9.jpg',
        path: '/public/avatars/user9.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10,
        uploaderId: 10,
        name: 'user10.jpg',
        path: '/public/avatars/user10.jpg',
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