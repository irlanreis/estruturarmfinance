require('dotenv').config(); // Adicione esta linha no topo

const config = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD, // Corrigido aqui
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    logging: false
  },

  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD, // Corrigido aqui
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    logging: false
  },

  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD, // Corrigido aqui
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    logging: false
  }
};

module.exports = config;