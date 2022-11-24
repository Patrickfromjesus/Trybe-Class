const { address, employee } = require('../models');

const getAllAddresses = async () => {
  const Addresses = await address.findAll({
    include: { model: employee, as: 'employees' }
  });
  return Addresses;
};

const getById = async (id) => {
  const Addresses = await address.findAll({
    where: { employee_id: id },
  });
  return Addresses;
};

module.exports = {
  getAllAddresses,
  getById,
};

