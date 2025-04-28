const Entry = require("../../models/entry/entryModel");
const Client = require("../../models/client/clientModel");
const Service = require("../../models/service/serviceModel");

class EntryService {
  async createEntry(data) {
    const { clientId, serviceId, contractId, formatPayment, valor, status } =
      data;

    if (!clientId || !serviceId || !formatPayment || !valor || !status) {
      throw new Error("Campo obrigatório não preenchido.");
    }

    // Cria a entrada
    const entry = await Entry.create({
      clientId,
      serviceId,
      contractId,
      formartPayment: formatPayment, // ou ajuste para formatPayment no model
      valor,
      status,
    });

    // Busca os nomes relacionados
    const client = await Client.findByPk(clientId);
    const service = await Service.findByPk(serviceId);

    return {
      ...entry.toJSON(),
      clienteNome: client ? client.nome : null,
      servicoNome: service ? service.nome : null,
    };
  }

  async getAllEntries() {
    return await Entry.findAll();
  }

  async getEntryById(id) {
    const entry = await Entry.findByPk(id);
    if (!entry) throw new Error("Entrada não encontrada.");
    return entry;
  }

  async getEntryByClientId(clientId) {
    const entry = await Entry.findAll({ where: { clientId } });
    if (!entry) throw new Error("Entrada não encontrada.");
    return entry;
  }

  async getEntryByServiceId(serviceId) {
    const entry = await Entry.findAll({ where: { serviceId } });
    if (!entry) throw new Error("Entrada não encontrada.");
    return entry;
  }

  async getEntryByContractId(contractId) {
    const entry = await Entry.findAll({ where: { contractId } });
    if (!entry) throw new Error("Entrada não encontrada.");
    return entry;
  }

  async getEntryByStatus(status) {
    const entries = await Entry.findAll({ where: { status } });
    if (!entries.length) throw new Error("Entrada não encontrada.");
    return entries;
  }

  async getEntryByFormatPayment(formatPayment) {
    const entries = await Entry.findAll({ where: { formartPayment: formatPayment } });
    if (!entries.length) throw new Error("Entrada não encontrada.");
    return entries;
  }

  async getEntriesByPeriod(startDate, endDate) {
    const entries = await Entry.findAll({
      where: {
        createdAt: {
          [Op.between]: [new Date(startDate), new Date(endDate)],
        },
      },
    });
    if (!entries.length)
      throw new Error("Nenhuma entrada encontrada nesse período.");
    return entries;
  }

  async updateEntry(id, data) {
    const entry = await Entry.findByPk(id);
    if (!entry) throw new Error("Entrada não encontrada.");

    // Se estiver alterando o nome, verificar se já existe outro serviço com o nome novo
    if (data.nome && data.nome !== entry.nome) {
      const existingEntry = await Entry.findOne({ where: { nome: data.nome } });
      if (existingEntry) {
        throw new Error("Já existe uma entrada com este nome.");
      }
    }

    await entry.update(data);
    return entry;
  }

  async deleteEntry(id) {
    const entry = await Entry.findByPk(id);
    if (!entry) throw new Error("Entrada não encontrada.");

    await entry.destroy();
    return { message: "Entrada excluída com sucesso." };
  }
}

module.exports = new EntryService();
