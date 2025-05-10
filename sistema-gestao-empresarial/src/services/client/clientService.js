const Client = require('../../models/client/clientModel');
const Service = require('../../models/service/serviceModel');

class ClientService {
  // Cria cliente e associa serviços existentes
  async create(dadosCliente, idsServicos) {
    if (!idsServicos || !Array.isArray(idsServicos) || idsServicos.length === 0) {
      throw new Error('É obrigatório associar pelo menos um serviço ao cliente.');
    }
    return await Client.sequelize.transaction(async (t) => {
      const cliente = await Client.create(dadosCliente, { transaction: t });
      await cliente.setServicos(idsServicos, { transaction: t });
      return cliente;
    });
  }

  // Adiciona serviços existentes a um cliente já criado
  async addServiceToClient(clientId, novosIdsServicos) {
    const cliente = await Client.findByPk(clientId);
    if (!cliente) throw new Error('Cliente não encontrado');
    await cliente.addServicos(novosIdsServicos);
  }

  // Lista todos os clientes com nomes dos serviços associados
  async findAll() {
    const clientes = await Client.findAll(
      {
        include: {
          model: Service,
          as: 'servicos',
          attributes: ['nome'],
          through: { attributes: [] }
        },
      }
    );
    return clientes.map(c => ({
      ...c.toJSON(),
      servicos: c.servicos.map(s => s.nome)
    }));
  }

  // Busca cliente por ID com nomes dos serviços associados
  async findById(id) {
  const cliente = await Client.findByPk(id, {
    include: {
      model: Service,
      as: 'servicos',
      attributes: ['nome'],
      through: { attributes: [] }
    },
  });
  if (!cliente) return null;
  const c = cliente.toJSON();
  // Remove o campo original 'servicos' e adiciona apenas o array de nomes
  const { servicos, ...rest } = c;
  return {
    ...rest,
    servicos: servicos.map(s => s.nome)
  };
}

  async delete(id) {
    const client = await Client.findByPk(id);
    if (!client) return null;
    await client.destroy();
    return true;
  }
}

module.exports = new ClientService();