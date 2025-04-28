const EntryService = require('../../services/entry/entryService');
const httpStatus = require('../../utils/httpDictionary');

class EntryController {
  async create(req, res) {
    try {
      const entry = await EntryService.createEntry(req.body);
      res.status(httpStatus.CREATED).json(entry);
    } catch (err) {
      res.status(httpStatus.BAD_REQUEST).json({ error: err.message });
    }
  }

  async getAll(req, res) {
    try {
      const entries = await EntryService.getAllEntries();
      res.status(httpStatus.OK).json(entries);
    } catch (err) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: err.message });
    }
  }

  async getById(req, res) {
    try {
      const entry = await EntryService.getEntryById(req.params.id);
      res.status(httpStatus.OK).json(entry);
    } catch (err) {
      res.status(httpStatus.NOT_FOUND).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const entry = await EntryService.updateEntry(req.params.id, req.body);
      res.status(httpStatus.OK).json(entry);
    } catch (err) {
      res.status(httpStatus.BAD_REQUEST).json({ error: err.message });
    }
  }

  async delete(req, res) {
    try {
      const result = await EntryService.deleteEntry(req.params.id);
      res.status(httpStatus.OK).json(result);
    } catch (err) {
      res.status(httpStatus.NOT_FOUND).json({ error: err.message });
    }
  }

  async getByClient(req, res) {
    try {
      const entries = await EntryService.getEntryByClientId(req.params.clientId);
      res.status(httpStatus.OK).json(entries);
    } catch (err) {
      res.status(httpStatus.NOT_FOUND).json({ error: err.message });
    }
  }

  async getByService(req, res) {
    try {
      const entries = await EntryService.getEntryByServiceId(req.params.serviceId);
      res.status(httpStatus.OK).json(entries);
    } catch (err) {
      res.status(httpStatus.NOT_FOUND).json({ error: err.message });
    }
  }

  async getByContract(req, res) {
    try {
      const entries = await EntryService.getEntryByContractId(req.params.contractId);
      res.status(httpStatus.OK).json(entries);
    } catch (err) {
      res.status(httpStatus.NOT_FOUND).json({ error: err.message });
    }
  }

  async getByStatus(req, res) {
    try {
      const entries = await EntryService.getEntryByStatus(req.params.status);
      res.status(httpStatus.OK).json(entries);
    } catch (err) {
      res.status(httpStatus.NOT_FOUND).json({ error: err.message });
    }
  }

  async getByFormatPayment(req, res) {
    try {
      const entries = await EntryService.getEntryByFormatPayment(req.params.formatPayment);
      res.status(httpStatus.OK).json(entries);
    } catch (err) {
      res.status(httpStatus.NOT_FOUND).json({ error: err.message });
    }
  }

  async getByPeriod(req, res) {
    try {
      const { startDate, endDate } = req.query;
      const entries = await EntryService.getEntriesByPeriod(startDate, endDate);
      res.status(httpStatus.OK).json(entries);
    } catch (err) {
      res.status(httpStatus.NOT_FOUND).json({ error: err.message });
    }
  }
}

module.exports = new EntryController();