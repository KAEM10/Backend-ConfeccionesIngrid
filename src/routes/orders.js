const express = require('express');
const connection = require('../config/db');
const { getOrders} = require('../controllers/orders');
const { sucess, error } = require('../utils/requets');

const router = express.Router();

router.get('/', (req, res) => {
    getOrders(req, res);
});

module.exports = router;