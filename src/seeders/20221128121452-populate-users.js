'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        name: 'Paulo de Tarso',
        email: 'Paulo@detarso.com'
      },
      {
        name: 'Simão Pedro',
        email: 'Simao@pedro.com'
      },
      {
        name: 'Rei Davi',
        email: 'Rei@davi.com'
      },
    ]);
  },

  async down (queryInterface, _Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
