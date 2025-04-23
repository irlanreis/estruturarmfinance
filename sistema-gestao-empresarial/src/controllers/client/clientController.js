const clientService = require('../../services/client/clientService');
const httpStatus = require('../../utils/httpDictionary');

class ClientController {
  async create(req, res) {
    try {
      const client = await clientService.create(req.body);
      res.status(httpStatus.CREATED).json(client);
    } catch (err) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: err.message });
    }
  }

  async findClientWithServices(req, res) {
    try {
      const client = await clientService.findClientWithServices(req.params.id);
      if (!client) return res.status(httpStatus.NOT_FOUND).json({ error: 'Cliente não encontrado' });
      res.status(httpStatus.OK).json(client);
    } catch (err) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: err.message });
    }
  }

  async findAllClientWithService(req, res) {
    try {
      const clients = await clientService.findAllClientWithService();
      res.status(httpStatus.OK).json(clients);
    } catch (err) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: err.message });
    }
  }

  async findAll(req, res) {
    try {
      const clients = await clientService.findAll(req.query);
      res.status(httpStatus.OK).json(clients);
    } catch (err) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: err.message });
    }
  }

  async findById(req, res) {
    try {
      const { id } = req.params;
      const client = await clientService.findById(id);
      if (!client) return res.status(httpStatus.NOT_FOUND).json({ error: 'Cliente não encontrado' });
      res.status(httpStatus.OK).json(client);
    } catch (err) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const client = await clientService.update(req.params.id, req.body);
      if (!client) return res.status(httpStatus.NOT_FOUND).json({ error: 'Cliente não encontrado' });
      res.status(httpStatus.OK).json(client);
    } catch (err) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: err.message });
    }
  }

  async remove(req, res) {
    try {
      const { id } = req.params;
      const deleted = await clientService.delete(id);
      if (!deleted) return res.status(httpStatus.NOT_FOUND).json({ error: 'Cliente não encontrado' });
      res.status(httpStatus.OK).json({ message: 'Cliente deletado!' });
    } catch (err) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: err.message });
    }
  }
}

module.exports = new ClientController();
