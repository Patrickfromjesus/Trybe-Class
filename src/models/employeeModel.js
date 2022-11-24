const EmployeeModel = (sequelize, DataTypes) => {
  const Employee = sequelize.define('employee', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    age: DataTypes.INTEGER,
  },
  {
    timestamps: false,
    underescore: true,
  }
  );

  Employee.associate = (models) => {
    Employee.hasMany(models.address,
      {
        foreignKey: 'employeeId',
        as: 'addresses'
      })
  }

  return Employee;
};

module.exports = EmployeeModel;
