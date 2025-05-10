'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('contracts', [
      {
        clientId: 1,
        serviceId: 1,
        dataInicio: new Date('2025-01-01'),
        dataFim: new Date('2025-12-31'),
        valorTotal: 1000.00,
        status: 'ativo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        clientId: 2,
        serviceId: 2,
        dataInicio: new Date('2025-02-01'),
        dataFim: new Date('2025-12-31'),
        valorTotal: 2000.00,
        status: 'ativo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        clientId: 3,
        serviceId: 3,
        dataInicio: new Date('2025-03-01'),
        dataFim: new Date('2025-12-31'),
        valorTotal: 3000.00,
        status: 'ativo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        clientId: 4,
        serviceId: 4,
        dataInicio: new Date('2025-04-01'),
        dataFim: new Date('2025-12-31'),
        valorTotal: 4000.00,
        status: 'ativo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        clientId: 5,
        serviceId: 5,
        dataInicio: new Date('2025-05-01'),
        dataFim: new Date('2025-12-31'),
        valorTotal: 5000.00,
        status: 'ativo',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('contracts', null, {});
  }
};