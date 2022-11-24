const employeeServices = require('../Services/employeeService');
const addressService = require('../Services/addressService');

const getAllEmployees = async (req, res) => {
  try {
    const response = await employeeServices.getAll();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await employeeServices.getById(id);
    if (!response) return res.status(404).json({ message: 'Usuário não encontrado' });
    
    const { addressInclude } = req.query;
    if (addressInclude === 'true') {
      const addressResponse = await addressService.getById(id);
      if (!addressResponse) return res.status(404).json({ message: 'Endereço não encontrado' });
      return res.status(200).json({employees: response, addressess: addressResponse});
    }

    return res.status(200).json(response);

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllEmployees,
  getById,
};
