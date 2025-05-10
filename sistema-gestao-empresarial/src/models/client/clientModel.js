const { DataTypes } = require('sequelize');
const sequelize = require('../../database/config/sequelize.js');
const Service = require('../service/serviceModel.js');

const Client = sequelize.define('Client', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  endereco: {
    type: DataTypes.STRING,
  },
  telefone: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  observacoes: {
    type: DataTypes.TEXT,
  },
  status: {
    type: DataTypes.ENUM('ativo', 'inativo'),
    defaultValue: 'ativo',
  },
}, {
  tableName: 'clients',
  timestamps: true,
});

Service.belongsToMany(Client, {
  through: 'client_services',
  as: 'clientes',
  foreignKey: 'serviceId',
});

Client.belongsToMany(Service, {
  through: 'client_services',
  as: 'servicos',
  foreignKey: 'clientId',
});

module.exports = Client;
