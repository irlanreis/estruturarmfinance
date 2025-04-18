const Contract = require('../../models/contract/contractModel');

class ContractService {
  async createContract(data) {
    const { clienteId, servicos, formaPagamento, valorTotal } = data;

    if (!clienteId || !servicos || !formaPagamento || !valorTotal) {
      throw new Error('Campos obrigatórios não preenchidos.');
    }

    return await Contract.create(data);
  }

  async getAllContracts() {
    return await Contract.findAll();
  }

  async getContractById(id) {
    const contract = await Contract.findByPk(id);
    if (!contract) throw new Error('Contrato não encontrado.');
    return contract;
  }

  async updateContract(id, data) {
    const contract = await Contract.findByPk(id);
    if (!contract) throw new Error('Contrato não encontrado.');

    await contract.update(data);
    return contract;
  }

  async deleteContract(id) {
    const contract = await Contract.findByPk(id);
    if (!contract) throw new Error('Contrato não encontrado.');

    // Exclusão lógica
    await contract.update({ status: 'cancelado' });
    return { message: 'Contrato cancelado com sucesso.' };
  }
}

module.exports = new ContractService();
