const Client = require('./client/clientModel');
const Service = require('./service/serviceModel');
const Contract = require('./contract/contractModel');
const Entrada = require('./entrada/entradaModel');

// Associações já definidas no serviceModel.js (mantidas aqui para referência)
// Client.hasMany(Service, { foreignKey: 'clienteId' });
// Service.belongsTo(Client, { foreignKey: 'clienteId' });

// Associações entre Service e Contract
Contract.hasMany(Service, { foreignKey: 'contratoId' });
Service.belongsTo(Contract, { foreignKey: 'contratoId' });

// Associações entre Service e Entrada
Entrada.hasMany(Service, { foreignKey: 'entradaId' });
Service.belongsTo(Entrada, { foreignKey: 'entradaId' });

// Associações entre Contract e Client
Client.hasMany(Contract, { foreignKey: 'clienteId' });
Contract.belongsTo(Client, { foreignKey: 'clienteId' });

// Associações entre Contract e Entrada
Entrada.hasMany(Contract, { foreignKey: 'entradaId' });
Contract.belongsTo(Entrada, { foreignKey: 'entradaId' });

module.exports = {
  Client,
  Service,
  Contract,
  Entrada
};