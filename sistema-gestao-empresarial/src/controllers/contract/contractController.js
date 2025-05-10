const contractService = require('../../services/contract/contractService');
const httpStatus = require('../../utils/httpDictionary');

class ContractController {
  async create(req, res) {
    try {
      const contract = await contractService.createContract(req.body);
      res.status(201).json(contract);
    } catch (error) {
      res.status(httpStatus.NOT_FOUND).json({ error: error.message });
    }
  }

  async findAll(req, res) {
    try {
      const contracts = await contractService.getAllContracts();
      res.json(contracts);
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
  }

  async findById(req, res) {
    try {
      const contract = await contractService.getContractById(req.params.id);
      res.json(contract);
    } catch (error) {
      res.status(httpStatus.NOT_FOUND).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const contract = await contractService.updateContract(req.params.id, req.body);
      res.json(contract);
    } catch (error) {
      res.status(httpStatus.BAD_REQUEST).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const result = await contractService.deleteContract(req.params.id);
      res.json(result);
    } catch (error) {
      res.status(httpStatus.NOT_FOUND).json({ error: error.message });
    }
  }
}

module.exports = new ContractController();
