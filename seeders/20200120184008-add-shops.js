'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('shops', [{
        id: 2001,
        userId: 1,
        name: 'بانک تجارت',
        description: 'توضیح بانک تجارت',
        addressId: 2001,
        categoryId: 12,
        phone: '09112345678',
        phoneVerified: true,
        imageId: 2001,
        isOpen: true,
        rateSum: 25,
        rateCount: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2002,
        name: 'بیتزا فلفلی',
        userId: 1,
        description: 'توضیح بیتزا فلفی',
        addressId: 2002,
        categoryId: 8,
        phone: '09115435678',
        phoneVerified: true,
        imageId: 2002,
        isOpen: true,
        rateSum: 30,
        rateCount: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2003,
        name: 'کامبیوتر عارف',
        userId: 1,
        description: 'توضیح کامبیوتر عارف',
        addressId: 2003,
        categoryId: 13,
        phone: '09119835678',
        phoneVerified: true,
        imageId: 2003,
        isOpen: false,
        rateSum: 12,
        rateCount: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id: 2004,
        name: 'مرغ کنتاکی بابل',
        userId: 2,
        description: 'مرغ کنتاکی بابل',
        addressId: 2004,
        categoryId: 8,
        phone: '09116558763',
        phoneVerified: true,
        imageId: 2004,
        isOpen: false,
        rateSum: 50,
        rateCount: 35,
        createdAt: new Date(),
        updatedAt: new Date()
      },


      {
        id: 2005,
        name: 'کفش ملی',
        userId: 2,
        description: 'کفش ملی',
        addressId: 2005,
        categoryId: 10,
        phone: '091964458763',
        phoneVerified: true,
        imageId: 2005,
        isOpen: true,
        rateSum: 50,
        rateCount: 35,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id: 2006,
        name: 'رستوران مرکزی هانی',
        userId: 2,
        description: 'رستوران مرکزی هانی',
        addressId: 2006,
        categoryId: 11,
        phone: '09108426821',
        phoneVerified: true,
        imageId: 2006,
        isOpen: true,
        rateSum: 48,
        rateCount: 35,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id: 2007,
        name: 'تعمیرگاه خلیج فارس',
        userId: 3,
        description: 'تعمیرکاه خلیج فارس',
        addressId: 2007,
        categoryId: 6,
        phone: '0912746821',
        phoneVerified: true,
        imageId: 2007,
        isOpen: true,
        rateSum: 16,
        rateCount: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }


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