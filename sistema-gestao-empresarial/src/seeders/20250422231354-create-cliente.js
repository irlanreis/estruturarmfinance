'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('clients', [
      {
        nome: 'Maria Silva',
        cpf: '12345678901',
        endereco: 'Rua das Flores, 123',
        telefone: '11999990001',
        email: 'maria.silva@email.com',
        observacoes: 'Cliente VIP',
        status: 'ativo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'João Souza',
        cpf: '23456789012',
        endereco: 'Av. Brasil, 456',
        telefone: '11999990002',
        email: 'joao.souza@email.com',
        observacoes: '',
        status: 'ativo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Ana Oliveira',
        cpf: '34567890123',
        endereco: 'Rua Verde, 789',
        telefone: '11999990003',
        email: 'ana.oliveira@email.com',
        observacoes: 'Prefere contato por e-mail',
        status: 'inativo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Carlos Pereira',
        cpf: '45678901234',
        endereco: 'Praça Central, 10',
        telefone: '11999990004',
        email: 'carlos.pereira@email.com',
        observacoes: '',
        status: 'ativo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Fernanda Lima',
        cpf: '56789012345',
        endereco: 'Alameda Azul, 321',
        telefone: '11999990005',
        email: 'fernanda.lima@email.com',
        observacoes: 'Cliente novo',
        status: 'ativo',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('clients', null, {});
  }
};