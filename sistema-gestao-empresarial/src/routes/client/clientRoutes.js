const express = require('express');
const clientController = require('../../controllers/client/clientController');

const router = express.Router();

router.post('/', clientController.create);
router.get('/', clientController.findAll);
router.get('/:id', clientController.findById);
router.put('/:id', clientController.update);
router.delete('/:id', clientController.remove);

module.exports = router;
