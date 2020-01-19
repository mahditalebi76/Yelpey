'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('images',
      [{
          id: 5001,
          uploaderId: 1,
          name: 'سوپر مارکت',
          path: 'http://localhost:9000/public/categories/category-superi.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 5002,
          uploaderId: 1,
          name: 'لباس فروشی',
          path: 'http://localhost:9000/public/categories/category-clothing.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          id: 5003,
          uploaderId: 1,
          name: 'میوه فروشی',
          path: 'http://localhost:9000/public/categories/category-fruit.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          id: 5004,
          uploaderId: 1,
          name: 'نانوایی',
          path: 'http://localhost:9000/public/categories/category-bakery.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          id: 5005,
          uploaderId: 1,
          name: 'ابزار فروشی',
          path: 'http://localhost:9000/public/categories/category-tool.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          id: 5006,
          uploaderId: 1,
          name: 'مکانیکی',
          path: 'http://localhost:9000/public/categories/category-mechanic.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          id: 5007,
          uploaderId: 1,
          name: 'لوازم یدکی',
          path: 'http://localhost:9000/public/categories/category-yadaki.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          id: 5008,
          uploaderId: 1,
          name: 'فست فود',
          path: 'http://localhost:9000/public/categories/category-fastfood.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          id: 5009,
          uploaderId: 1,
          name: 'آرایشگاه',
          path: 'http://localhost:9000/public/categories/category-barber.jpeg',
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          id: 5010,
          uploaderId: 1,
          name: 'کفش فروشی',
          path: 'http://localhost:9000/public/categories/category-shoe.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          id: 5011,
          uploaderId: 1,
          name: 'رستوران',
          path: 'http://localhost:9000/public/categories/category-restaurant.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          id: 5012,
          uploaderId: 1,
          name: 'بانک',
          path: 'http://localhost:9000/public/categories/category-bank.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          id: 5013,
          uploaderId: 1,
          name: 'خدمات کامپیوتری',
          path: 'http://localhost:9000/public/categories/category-computer.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('images', null, {});
  }
};