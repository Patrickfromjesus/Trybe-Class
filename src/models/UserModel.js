UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
  }, {
    timestamps: false,
    underscored: true,
  });
  return User;
};

module.exports = UserModel;
