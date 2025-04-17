const express = require('express');
const clientRoutes = require('./client/clientRoutes');
// const serviceRoutes = require('./service/serviceRoutes'); // já deixa preparado

const router = express.Router();

router.use('/clientes', clientRoutes);
// router.use('/servicos', serviceRoutes);

module.exports = router;
