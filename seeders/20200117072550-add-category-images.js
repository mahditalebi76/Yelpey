'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('images', [{
      id: 5001,
      uploaderId: 1,
      name: 'superi',
      path: 'http://localhost:9000/public/categories/category-superi.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('images', null, {});
  }
};