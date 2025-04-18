require('dotenv').config({ path: require('path').resolve(__dirname, '../../.env') });
const request = require('supertest');
const app = require('../../src/app');
const sequelize = require('../../src/database/config/sequelize');

describe('Client Routes', () => {
  beforeEach(async () => {
    await sequelize.sync({ force: true }); // Limpa e recria as tabelas
  });

  let createdClientId;
  it('should create a new client', async () => {
    const response = await request(app)
      .post('/api/clientes')
      .send({
        nome: "Maria Oliveira",
        cpf: "98765432100",
        endereco: "Rua das Acácias, 45",
        telefone: "(11) 91234-5678",
        email: "maria@example.com",
        observacoes: "Cliente recorrente"
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.nome).toBe('Maria Oliveira');
    createdClientId = response.body.id;
  });

  it('should return a list of clientes', async () => {
    const response = await request(app).get('/api/clientes');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('should return a specific client by ID', async () => {
    const response = await request(app).get(`/api/clientes/${createdClientId}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id', createdClientId);
  });

  it('should update a client by ID', async () => {
    const response = await request(app)
      .put(`/api/clientes/${createdClientId}`)
      .send({
        nome: 'Jane Doe',
        cpf: '98765432100',
        endereco: 'Rua Nova, 123',
        telefone: '987654321',
        email: 'janedoe@example.com',
        observacoes: 'Atualizado'
      });

    expect(response.status).toBe(200);
    expect(response.body.nome).toBe('Jane Doe');
  });

  it('should delete a client by ID', async () => {
    const response = await request(app).delete(`/api/clientes/${createdClientId}`);
    expect(response.status).toBe(204);
  });
});

afterAll(async () => {
  await sequelize.close();
});