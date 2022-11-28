'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    return queryInterface.bulkInsert('User_books', [
      {
        user_id: 1,
        book_id: 1
      },
      {
        user_id: 1,
        book_id: 2
      },
      {
        user_id: 1,
        book_id: 3
      },

      {
        user_id: 2,
        book_id: 4
      },
      {
        user_id: 2,
        book_id: 5
      },
      {
        user_id: 2,
        book_id: 1
      },
      {
        user_id: 3,
        book_id: 1
      },
      {
        user_id: 3,
        book_id: 2
      },
      {
        user_id: 3,
        book_id: 5
      },
      {
        user_id: 3,
        book_id: 8
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('User_books', null, {});
  }
};
