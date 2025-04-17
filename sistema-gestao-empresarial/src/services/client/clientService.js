const Client = require('../../models/client/clientModel');

class ClientService {
  async create(data) {
    return await Client.create(data);
  }

  async findAll(filters = {}) {
    return await Client.findAll({ where: filters });
  }

  async findById(id) {
    return await Client.findByPk(id);
  }

  async update(id, data) {
    const client = await this.findById(id);
    if (!client) return null;
    return await client.update(data);
  }

  async delete(id) {
    const client = await this.findById(id);
    if (!client) return null;
    await client.destroy();
    return true;
  }
}

module.exports = new ClientService();
