const { DataTypes } = require('sequelize');
const sequelize = require('../../database/config/sequelize');
const Client = require('../client/clientModel');

const Contract = sequelize.define('Contract', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  clienteId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  servicos: {
    type: DataTypes.JSON, // Exemplo: [{ id: 1, quantidade: 2 }, ...]
    allowNull: false,
  },
  formaPagamento: {
    type: DataTypes.ENUM('boleto', 'cartao', 'pix', 'dinheiro'),
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

Client.hasMany(Contract, { foreignKey: 'clienteId' });
Contract.belongsTo(Client, { foreignKey: 'clienteId' })

module.exports = Contract;
