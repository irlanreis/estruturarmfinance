const serviceService = require('../../services/service/serviceService');

class ServiceController {
  async createService(req, res) {
    try {
      // Pega o usuário da requisição
      const user = req.user?.login || 'irlanreis';
      
      const result = await serviceService.createService(req.body, user);
      return res.status(201).json({ message: 'Serviço criado!'});
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async getAllServices(req, res) {
    try {
      const services = await serviceService.getAllServices();
      return res.status(200).json(services);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async getServiceById(req, res) {
    try {
      const service = await serviceService.getServiceById(req.params.id);
      return res.status(200).json(service);
    } catch (error) {
      return res.status(404).json({ error: error.message });
    }
  }

  async updateService(req, res) {
    try {
      // Pega o usuário da requisição
      const user = req.user?.login || 'irlanreis';
      
      const result = await serviceService.updateService(req.params.id, req.body, user);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async deleteService(req, res) {
    try {
      const result = await serviceService.deleteService(req.params.id);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async getServicesByCategory(req, res) {
    try {
      const services = await serviceService.getServicesByCategory(req.params.categoria);
      return res.status(200).json(services);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new ServiceController();