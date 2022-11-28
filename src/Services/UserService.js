const { User } = require('../models');

const getAll = async () => {
  const user = await User.findAll();
  return user;
};

module.exports = {
  getAll,
};
