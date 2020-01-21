'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('addresses', [

      {
        id: 2001,
        postalCode: '4843153786',
        addressText: 'استان مازندران شهر بابل خیابان شریعتی بانک تجارت',
        cityId: 1073,
        location: queryInterface.sequelize.literal("ST_GeomFromText('POINT(36.56288 52.67940)', 4326)"),
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id: 2002,
        postalCode: '48678153786',
        addressText: 'استان مازندران شهر بابل خیابان شریعتی بیتزا فلفی ',
        cityId: 1073,
        location: queryInterface.sequelize.literal("ST_GeomFromText('POINT(36.56244 52.67889)', 4326)"),
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id: 2003,
        postalCode: '9535473812',
        addressText: 'استان مازندران شهر بابل خیابان شریعتی رو به روی دانشگاه نوشیروانی کامبیوتر عارف ',
        cityId: 1073,
        location: queryInterface.sequelize.literal("ST_GeomFromText('POINT(36.56209 52.67905)', 4326)"),
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id: 2004,
        postalCode: '9537673812',
        addressText: 'استان مازندران شهر بابل خیابان شریعتی  ',
        cityId: 1073,
        location: queryInterface.sequelize.literal("ST_GeomFromText('POINT(36.55916 52.67898)', 4326)"),
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id: 2005,
        postalCode: '4563273812',
        addressText: 'تهران دور میدان آزادی ابتدای خیابان ری',
        cityId: 333,
        location: queryInterface.sequelize.literal("ST_GeomFromText('POINT(35.67004 51.43633)', 4326)"),
        createdAt: new Date(),
        updatedAt: new Date()
      },


      {
        id: 2006,
        postalCode: '4563373812',
        addressText: 'تهران دور میدان آزادی ابتدای خیابان ری',
        cityId: 333,
        location: queryInterface.sequelize.literal("ST_GeomFromText('POINT(35.66999 51.43624)', 4326)"),
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id: 2007,
        postalCode: '1387734169',
        addressText: 'تهران خیابان خلیج فارس',
        cityId: 333,
        location: queryInterface.sequelize.literal("ST_GeomFromText('POINT(35.66984 51.26493)', 4326)"),
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