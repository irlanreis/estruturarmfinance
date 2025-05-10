const express = require('express');
const clientRoutes = require('./client/clientRoutes');
const constractRoutes = require('./contract/contractRoutes');
const serviceRoutes = require('./service/serviceRoutes');
const entryRoutes = require('./entry/entryRoutes');

const router = express.Router();

router.use('/clientes', clientRoutes);
router.use('/contratos', constractRoutes);
router.use('/servicos', serviceRoutes);
router.use('/entries', entryRoutes);


module.exports = router;
