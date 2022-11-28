const UserService = require('../Services/UserService');

const getAll = async (req, res) => {
  try {
    const response = await UserService.getAll();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  };
};

module.exports = {
  getAll,
};
