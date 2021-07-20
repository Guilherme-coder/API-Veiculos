const query = require('../infraestructure/database/queries')

class Users {
    async post(values) {
        const sql = `INSERT INTO Users SET ?;`
        return await query(sql, values)
    }

    async getAll() {
        const sql = `SELECT * FROM Users;`
        return await query(sql)
    }

    async getById(id){
        const sql = `SELECT * FROM Users WHERE id=?;`
        return await query(sql, id)
    }

    async checkCredentials(email, password){
        const sql = `SELECT * FROM Users WHERE email="${email}" AND password="${password}";`
        return await query(sql)
    }

    async checkEmail(email){
        const sql = `SELECT * FROM Users WHERE email=?;`
        return await query(sql, email)
    } 

    async updateById(id, values){
        const sql = `UPDATE Users SET ? WHERE id=${id};`
        return await query(sql, values)
    }
}

module.exports = new Users