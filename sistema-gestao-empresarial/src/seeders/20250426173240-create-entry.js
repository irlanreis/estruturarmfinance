"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();
    await queryInterface.bulkInsert(
      "entries",
      [
        {
          clientId: 1,
          contractId: 1,
          serviceId: 1,
          valor: 1200.00,
          status: "pendente",
          formatPayment: "Boleto",
          createdAt: now,
          updatedAt: now,
        },
        {
          clientId: 2,
          contractId: 2,
          serviceId: 2,
          valor: 1500.00,
          status: "pago",
          formatPayment: "Cartão",
          createdAt: now,
          updatedAt: now,
        },
        {
          clientId: 3,
          contractId: 3,
          serviceId: 3,
          valor: 1800.00,
          status: "cancelado",
          formatPayment: "Pix",
          createdAt: now,
          updatedAt: now,
        },
        {
          clientId: 4,
          contractId: 4,
          serviceId: 4,
          valor: 2000.00,
          status: "pago",
          formatPayment: "Boleto",
          createdAt: now,
          updatedAt: now,
        },
        {
          clientId: 5,
          contractId: 5,
          serviceId: 5,
          valor: 2200.00,
          status: "pago",
          formatPayment: "Cartão", 
          createdAt: now,
          updatedAt: now,
        },
        {
          clientId: 3,
          contractId: null,
          serviceId: 2,
          valor: 1300.00,
          status: "pendente",
          formatPayment: "Pix",
          createdAt: now,
          updatedAt: now,
        } 
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(
      "entries",
      {
        clientId: { [Sequelize.Op.in]: [1, 2, 3, 4, 5] },
      },
      {}
    );
  },
};
