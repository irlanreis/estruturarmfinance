require('dotenv').config({ path: require('path').resolve(__dirname, '../../../.env') });
const { Sequelize } = require('sequelize');
const config = require('./config.js').development;

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    port: config.port,
    dialect: config.dialect,
    logging: config.logging,
  }
);

module.exports = sequelize;