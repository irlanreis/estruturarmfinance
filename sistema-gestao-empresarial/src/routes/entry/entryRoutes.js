const express = require('express');
const router = express.Router();
const EntryController = require('../../controllers/entry/entryController');

router.post('/', EntryController.create);
router.put('/:id', EntryController.update);
router.delete('/:id', EntryController.delete);

router.get('/', EntryController.getAll);
router.get('/:id', EntryController.getById);
router.get('/client/:clientId', EntryController.getByClient);
router.get('/service/:serviceId', EntryController.getByService);
router.get('/contract/:contractId', EntryController.getByContract);
router.get('/status/:status', EntryController.getByStatus);
router.get('/formatPayment/:formatPayment', EntryController.getByFormatPayment);
router.get('/period', EntryController.getByPeriod);

module.exports = router;