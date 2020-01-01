'use strict';
const _ = require('lodash');
const Province = require('../config/Province.json');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const cityList = new Array();
    _.forEach(Province, async (state, stateKey) => {
      _.forEach(state.Cities, async (city, cityKey) => {
        cityList.push({
          name: city.name,
          stateId: stateKey + 1,
          createdAt: new Date(),
          updatedAt: new Date()
        })
      })
    })

    return await queryInterface.bulkInsert('cities', cityList, {})
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('cities', null, {});

  }
};