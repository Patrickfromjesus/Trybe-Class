'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    return queryInterface.bulkInsert('Books', [
      {
        title: 'livro 1',
      },
      {
        title: 'livro 2',
      },
      {
        title: 'livro 3',
      },
      {
        title: 'livro 4',
      },
      {
        title: 'livro 5',
      },
      {
        title: 'livro 6',
      },
      {
        title: 'livro 7',
      },
      {
        title: 'livro 8',
      },
      {
        title: 'livro 9',
      },
    ]);
  },

  async down (queryInterface, _Sequelize) {
    return queryInterface.bulkDelete('Books', null, {});
  }
};
