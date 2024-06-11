const { createPool } = require('mysql2');

const pool = createPool({
    port: '8111',
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crudnodesql',

    // configuration settings
    connectionLimit: 10,
    multipleStatements: true
});

module.exports = pool;