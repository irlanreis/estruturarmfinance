'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('client_services', [
      {
        clientId: 1,
        serviceId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        clientId: 1,
        serviceId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        clientId: 2,
        serviceId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        clientId: 3,
        serviceId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        clientId: 4,
        serviceId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('client_services', null, {});
  }
};