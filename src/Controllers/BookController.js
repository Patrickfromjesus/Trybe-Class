const BookService = require('../Services/BookService');

const getAll = async (req, res) => {
  try {
    const response = await BookService.getAll();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  };
};

module.exports = {
  getAll,
};
