"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("entries", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      clientId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      serviceId: {
        type: Sequelize.INTEGER,
        allowNull: true, // só se for serviço extra
      },
      contractId: {
        type: Sequelize.INTEGER,
        allowNull: true, // só se for contrato
      },
      valor: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      formatPayment: {
        type: Sequelize.ENUM("Boleto", "Cartão", "Pix"),
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM("pendente", "pago", "cancelado"),
        defaultValue: "pendente",
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("entries");
  },
};
