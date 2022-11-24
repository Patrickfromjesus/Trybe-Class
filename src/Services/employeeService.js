const { address, employee } = require('../models');

const getAll = async () => {
  const users = await employee.findAll({
    include: { model: address, as: 'addresses' },
  });
  return users;
};

const getById = async (id) => {
  const users = await employee.findOne({
    where: { id },
    /* include: { model: address, as: 'addresses', attributes: { exclude: ['employeeId'] } }, */
  });
  return users;
};

module.exports = {
  getAll,
  getById,
};
