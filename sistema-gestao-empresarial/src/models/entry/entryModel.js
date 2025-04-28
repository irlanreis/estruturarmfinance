"use strict";
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../../database/config/sequelize.js");

const Entry = sequelize.define(
  "Entry",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    clientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    contractId: {
      type: DataTypes.INTEGER,
      allowNull: true, // Agora pode ser nulo
    },
    serviceId: {
      type: DataTypes.INTEGER,
      allowNull: true, // Agora pode ser nulo
    },
    valor: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    formartPayment: {
      type: DataTypes.ENUM("Boleto", "Cartão", "Pix"),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("pendente", "pago", "cancelado"),
      defaultValue: "pendente",
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "entries",
    timestamps: true,
  }
);

// Associações
Entry.associate = (models) => {
  Entry.belongsTo(models.Client, { foreignKey: "clientId", as: "client" });
  Entry.belongsTo(models.Contract, {
    foreignKey: "contractId",
    as: "contract",
  });
  Entry.belongsTo(models.Service, { foreignKey: "serviceId", as: "service" });
};

module.exports = Entry;
