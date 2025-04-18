const contractService = require('../../services/contract/contractService');

class ContractController {
  async create(req, res) {
    try {
      const contract = await contractService.createContract(req.body);
      res.status(201).json(contract);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async findAll(req, res) {
    try {
      const contracts = await contractService.getAllContracts();
      res.json(contracts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async findById(req, res) {
    try {
      const contract = await contractService.getContractById(req.params.id);
      res.json(contract);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const contract = await contractService.updateContract(req.params.id, req.body);
      res.json(contract);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const result = await contractService.deleteContract(req.params.id);
      res.json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new ContractController();
