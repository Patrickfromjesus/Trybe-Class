const { UserBook } = require('../models');

const getAll = async () => {
  const userBook = await UserBook.findAll();
  return userBook;
};

module.exports = {
  getAll,
};
