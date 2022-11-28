const { Book } = require('../models');

const getAll = async () => {
  const book = await Book.findAll();
  return book;
};

module.exports = {
  getAll,
};
