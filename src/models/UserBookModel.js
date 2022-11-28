const UserBookModel = (sequelize, DataTypes) => {
  const UserBook = sequelize.define('User_book', {}, {
    timestamps: false,
    underscored: true,
  });

  UserBook.associate = (models) => {
    models.Book.belongsToMany(models.User, {
      as: 'user',
      through: UserBook,
      foreignKey: 'book_id',
      otherKey: 'user_id',
    });
    models.User.belongsToMany(models.Book, {
      as: 'book',
      through: UserBook,
      foreignKey: 'user_id',
      otherKey: 'book_id',
    });
  }
  return UserBook;
}

module.exports = UserBookModel;
