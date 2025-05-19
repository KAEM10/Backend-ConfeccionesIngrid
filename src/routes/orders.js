const express = require('express');
//const connection = require('../config/db');
const { getOrders } = require('../controllers/orders');
//const { sucess, error } = require('../utils/requets');

const router = express.Router();

router.get('/', (req, res) => {
    const all = getOrders('pedidos');
    all.then((results) => {
        res.status(200).json(results);
    })
    .catch((err) => {
        res.status(500).json(err);
    });
});

module.exports = router;