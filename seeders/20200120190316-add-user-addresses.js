'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('addresses', [{
        id: 5,
        postalCode: '4843156786',
        addressText: 'استان مازندران شهر بابل خیابان شریعتی خوابگاه امینیان اتاق ۴۰۹',
        cityId: 1073,
        location: queryInterface.sequelize.literal("ST_GeomFromText('POINT(36.56285 52.68534)', 4326)"),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        postalCode: '4843156786',
        addressText: 'استان مازندران شهر بابل خیابان شریعتی خوابگاه امینیان اتاق ۴۰۹',
        cityId: 1073,
        location: queryInterface.sequelize.literal("ST_GeomFromText('POINT(36.56285 52.68534)', 4326)"),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        postalCode: '4843156786',
        addressText: 'استان مازندران شهر بابل خیابان شریعتی خوابگاه امینیان اتاق ۴۰۹',
        cityId: 1073,
        location: queryInterface.sequelize.literal("ST_GeomFromText('POINT(36.56285 52.68534)', 4326)"),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        postalCode: '4843156786',
        addressText: 'استان مازندران شهر بابل خیابان شریعتی خوابگاه امینیان اتاق ۴۰۹',
        cityId: 1073,
        location: queryInterface.sequelize.literal("ST_GeomFromText('POINT(36.56285 52.68534)', 4326)"),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        postalCode: '4843156786',
        addressText: 'استان مازندران شهر بابل خیابان شریعتی خوابگاه امینیان اتاق ۴۰۹',
        cityId: 1073,
        location: queryInterface.sequelize.literal("ST_GeomFromText('POINT(36.56285 52.68534)', 4326)"),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10,
        postalCode: '4843156786',
        addressText: 'استان مازندران شهر بابل خیابان شریعتی خوابگاه امینیان اتاق ۴۰۹',
        cityId: 1073,
        location: queryInterface.sequelize.literal("ST_GeomFromText('POINT(36.56285 52.68534)', 4326)"),
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