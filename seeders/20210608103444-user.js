'use strict';

module.exports = {
  up : function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      login : 'testUser',
      name : 'testNameUser',
      password : '12345678',
      createdAt : new Date(),
      updatedAt : new Date(),
    }], {});
  },

  down : function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', [{
      login : 'testUser'
    }])
  }
};
