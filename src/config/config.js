require('dotenv').config();

const config = {
  'username': process.env.MYSQL_USERNAME,
  'password': process.env.MYSQL_PASSWORD,
  'database': 'development',
  'host': process.env.MYSQL_HOST,
  'dialect': 'mysql',
};

module.exports = {
  development: config,
  test: { ...config, database: 'test' },
  production: { ...config, database: 'production' },
};
