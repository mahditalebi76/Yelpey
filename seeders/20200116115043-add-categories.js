module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categories', [{
      name: 'default category',
      icon: '<i class="fas fa-adjust"></i>',
      description: 'default category for testing. temporary until we add full categories',
      imageId: 5001,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categories', null, {});
  }
};