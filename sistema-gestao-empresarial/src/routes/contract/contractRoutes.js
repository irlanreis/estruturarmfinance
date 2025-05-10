const express = require('express');
const router = express.Router();
const contractController = require('../../controllers/contract/contractController');

router.post('/', contractController.create);
router.get('/', contractController.findAll);
router.get('/:id', contractController.findById);
router.put('/:id', contractController.update);
router.delete('/:id', contractController.delete);

module.exports = router;
