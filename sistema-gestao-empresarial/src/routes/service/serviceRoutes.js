const express = require('express');
const serviceController = require('../../controllers/service/serviceController');
const router = express.Router();

// Rotas para serviços
router.post('/', serviceController.createService);
router.get('/', serviceController.getAllServices);
router.get('/categoria/:categoria', serviceController.getServicesByCategory);
router.get('/:id', serviceController.getServiceById);
router.put('/:id', serviceController.updateService);
router.delete('/:id', serviceController.deleteService);

module.exports = router;