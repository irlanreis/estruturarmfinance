const clientService = require('../../services/client/clientService');

class ClientController {
  async create(req, res) {
    try {
      const client = await clientService.create(req.body);
      res.status(201).json(client);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async findAll(req, res) {
    try {
      const clients = await clientService.findAll(req.query);
      res.status(200).json(clients);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async findById(req, res) {
    try {
      const client = await clientService.findById(req.params.id);
      if (!client) return res.status(404).json({ error: 'Cliente não encontrado' });
      res.status(200).json(client);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const client = await clientService.update(req.params.id, req.body);
      if (!client) return res.status(404).json({ error: 'Cliente não encontrado' });
      res.status(200).json(client);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async remove(req, res) {
    try {
      const deleted = await clientService.delete(req.params.id);
      if (!deleted) return res.status(404).json({ error: 'Cliente não encontrado' });
      res.status(204).jsn({ message: 'Cliente removido com sucesso' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = new ClientController();
