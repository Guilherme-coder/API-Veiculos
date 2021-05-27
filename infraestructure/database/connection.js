const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'allmontain660',
    database: 'vehicles',
    port: 3306
})

module.exports = connection