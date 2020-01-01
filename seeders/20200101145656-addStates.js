'use strict';
const _ = require('lodash');
const Province = require('../config/Province.json')
module.exports = {
  up: (queryInterface, Sequelize) => {
    const stateList = new Array();
    _.forEach(Province, (state, key) => {
      stateList.push({
        id: key + 1,
        name: state.name,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    })
    return queryInterface.bulkInsert('states', stateList, {})
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('states', null, {});

  }
};