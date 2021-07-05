// insira os dados do seu servidor mysql nesse arquivo

const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'vehicles',
    port: 3306
})

module.exports = connection