const Service = require('../../models/service/serviceModel');

class ServiceService {
  async createService(data, user = 'sistema') {
    const { nome, tipo, descricao, preco, categoria } = data;

    if (!nome || !tipo || !descricao || !preco || !categoria) {
      throw new Error('Campos obrigatórios não preenchidos.');
    }

    // Verificar se já existe um serviço com este nome
    const existingService = await Service.findOne({ where: { nome } });
    if (existingService) {
      throw new Error('Já existe um serviço com este nome.');
    }

    // Adiciona o usuário que está criando o registro
    return await Service.create(data, {
      user: user
    });
  }

  async getAllServices() {
    return await Service.findAll({
      order: [['preco', 'DESC'], ['categoria', 'ASC'], ['nome', 'ASC']]
    });
  }

  async getServiceById(id) {
    const service = await Service.findByPk(id);
    if (!service) throw new Error('Serviço não encontrado.');
    return service;
  }

  async updateService(id, data, user = 'sistema') {
    const service = await Service.findByPk(id);
    if (!service) throw new Error('Serviço não encontrado.');

    // Se estiver alterando o nome, verificar se já existe outro serviço com o nome novo
    if (data.nome && data.nome !== service.nome) {
      const existingService = await Service.findOne({ where: { nome: data.nome } });
      if (existingService) {
        throw new Error('Já existe um serviço com este nome.');
      }
    }

    await service.update(data, {
      user: user
    });
    
    return service;
  }

  async deleteService(id) {
    const service = await Service.findByPk(id);
    if (!service) throw new Error('Serviço não encontrado.');

    await service.destroy();
    return { message: 'Serviço excluído com sucesso.' };
  }

  async getServicesByCategory(categoria) {
    if (!categoria) return null;
  
    const services = await Service.findAll({
      where: { categoria },
      order: [['nome', 'ASC']]
    });
  
    if (!services || services.length === 0) {
      throw new Error('Nenhum serviço encontrado nesta categoria.');
    }
  
    return services;
  }
}

module.exports = new ServiceService();