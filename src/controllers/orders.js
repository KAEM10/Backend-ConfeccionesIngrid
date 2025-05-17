const connection = require('../config/db');
const { sucess, error } = require('../utils/requets');

const getOrders = (req, res) => {
    connection.query('SELECT * FROM pedidos', (err, results) => {
        if (err) {
            error(req, res, err);
            return;
        }
        sucess(req, res, results);
    });
}

module.exports = {
    getOrders
}
