const { DataTypes } = require('sequelize');
const sequelize = require('../../database/config/sequelize');
const Client = require('../client/clientModel');
const Service = require('../service/serviceModel');

const Contract = sequelize.define('Contract', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  clientId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  formaPagamento: {
    type: DataTypes.ENUM('boleto', 'cartao', 'pix', 'dinheiro'),
    allowNull: false,
  },
  serviceId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  parcelas: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
  valorTotal: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('ativo', 'cancelado'),
    defaultValue: 'ativo',
  },
}, {
  timestamps: true,
  tableName: 'contracts',
});

Client.hasMany(Contract, { foreignKey: 'clientId' });
Contract.belongsTo(Client, { foreignKey: 'clientId' })

Service.hasMany(Contract, { foreignKey: 'serviceId' });
Contract.belongsTo(Service, { foreignKey: 'serviceId' });

module.exports = Contract;
