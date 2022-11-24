const addressService = require('../Services/addressService');

const getAll = async (req, res) => {
  try {
    const response = await addressService.getAllAddresses();
    return res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await addressService.getById(id);
    if (!response) return res.status(404).json({ message: 'Usuário não encontrado' });
    return res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAll,
  getById,
};