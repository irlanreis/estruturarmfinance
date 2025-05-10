"use strict";
const { DataTypes } = require("sequelize");
const sequelize = require("../../database/config/sequelize.js");

const ClientService = sequelize.define(
  "ClientService",
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
    serviceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
    tableName: "client_services",
    timestamps: true,
  }
);

ClientService.associate = (models) => {
  ClientService.belongsTo(models.Client, {
    foreignKey: "clientId",
    as: "clients",
  });
  ClientService.belongsTo(models.Service, {
    foreignKey: "serviceId",
    as: "services",
  });
};

module.exports = ClientService;