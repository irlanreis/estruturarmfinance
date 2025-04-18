const sequelize = require('../../database/config/sequelize');
const { DataTypes } = require('sequelize');

const Service = sequelize.define('Service', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  tipo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  preco: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  categoria: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdBy: {
    type: DataTypes.STRING,
    allowNull: true
  },
  updatedBy: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  timestamps: true,
  tableName: 'services',
  hooks: {
    beforeCreate: (service, options) => {
      if (options.user) {
        service.createdBy = options.user;
      }
    },
    beforeUpdate: (service, options) => {
      if (options.user) {
        service.updatedBy = options.user;
      }
    }
  }
});

module.exports = Service;