module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('address', {
    id: {
      type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true
    },
    city: DataTypes.STRING,
    street: DataTypes.STRING,
    number: DataTypes.INTEGER,
    employeeId: {
      type: DataTypes.INTEGER, foreignKey: true
    },
  },
  {
    timestamps: false,
    underscored: true,
  });

  Address.associate = (models) => {
    Address.belongsTo(models.employee,
      { foreignKey: 'employeeId', as: 'employees' });
  };

  return Address;
};