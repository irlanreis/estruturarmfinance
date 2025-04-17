require('dotenv').config();
const app = require('./app');
const { sequelize } = require('./models');

const PORT = process.env.DB_PORT || 3000;

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
  
  app.listen(PORT, () => {
    console.log(`Servidor Express rodando na porta ${PORT}`);
  });
}

init();