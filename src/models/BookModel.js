const BookModel = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: DataTypes.STRING,
  }, {
    timestamps: false,
    underscored: true,
  });
  return Book;
};

module.exports = BookModel;