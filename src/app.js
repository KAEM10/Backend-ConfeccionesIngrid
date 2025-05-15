const express = require('express');
const config = require('./config');
const pedidos = require('./modules/orders/rutes');
const app = express();

// configure
app.set('port', config.app.port);

// rutes
app.use('/api/orders', pedidos)

module.exports = app;