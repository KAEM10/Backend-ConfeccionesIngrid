const express = require('express');
const config = require('./config/config');
const pedidos = require('./routes/orders');

const app = express();

// configure
app.set('port', config.app.port);

// rutes
app.use('/api/orders', pedidos)

module.exports = app;