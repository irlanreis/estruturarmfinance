'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('services', [
      {
        nome: 'Desenvolvimento de Site',
        tipo: 'tecnologia',
        descricao: 'Criação de site institucional responsivo.',
        preco: 3500.00,
        categoria: 'tecnologia',
        createdBy: 'admin',
        updatedBy: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Consultoria Financeira',
        tipo: 'consultoria',
        descricao: 'Análise e planejamento financeiro empresarial.',
        preco: 2000.00,
        categoria: 'consultoria',
        createdBy: 'admin',
        updatedBy: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Gestão de Redes Sociais',
        tipo: 'social media',
        descricao: 'Gerenciamento de perfis e campanhas em redes sociais.',
        preco: 1500.00,
        categoria: 'social media',
        createdBy: 'admin',
        updatedBy: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Criação de Logotipo',
        tipo: 'design',
        descricao: 'Desenvolvimento de identidade visual e logotipo.',
        preco: 800.00,
        categoria: 'design',
        createdBy: 'admin',
        updatedBy: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Campanha de E-mail Marketing',
        tipo: 'marketing',
        descricao: 'Planejamento e disparo de campanhas de e-mail marketing.',
        preco: 1200.00,
        categoria: 'marketing',
        createdBy: 'admin',
        updatedBy: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('services', null, {});
  }
};