const connection = require('../config/db');

function getOrders(tabla) {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${tabla}`, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}

function getOrderById(id) {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM pedidos WHERE id = ?`, [id], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}

function createOrder(order) {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO pedidos SET ?`, order, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}

function updateOrder(id, order) {
    return new Promise((resolve, reject) => {
        connection.query(`UPDATE pedidos SET ? WHERE id = ?`, [order, id], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}

function deleteOrder(id) {
    return new Promise((resolve, reject) => {
        connection.query(`DELETE FROM pedidos WHERE id = ?`, [id], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}

module.exports = {
    getOrders,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder
}
