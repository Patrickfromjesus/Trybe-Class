require('dotenv').config();

const config = {
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  host: process.env.MYSQL_HOST,
  dialect: 'mysql',
  define: {
    timestamps: true,
  },
};

module.exports = {
  development: config,
  test: config,
  production: config,
};
