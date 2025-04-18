require('dotenv').config();
const app = require('./app');
const sequelize = require("./database/config/sequelize.js");

const PORT = process.env.PORT;

async function assertDatabaseConnectionOk() {
  console.log('Verificando conexão com o banco de dados...');
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  } catch (error) {
    console.log('Não foi possível conectar ao banco de dados:', error);
    process.exit(1);
  }
}

async function init() {
  await assertDatabaseConnectionOk();
  await sequelize.sync({ alter: true });
  
  app.listen(PORT, () => {
    console.log(`Servidor Express rodando na porta ${PORT}`);
  });
}

init();