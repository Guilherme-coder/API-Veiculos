const query = require('../infraestructure/database/queries')

class Cars{
    async post(values){
        const sql = 'INSERT INTO Cars SET ?;'
        return await query(sql, values)
    }

    async getAll(){
        const sql = 'SELECT * FROM Cars ORDER BY data DESC;'
        return await query(sql)
    }

    async getById(id){
        const sql = 'SELECT * FROM Cars WHERE id=?;'
        return await query(sql, id)
    }

    async getByModel(model){
        const sql = 'SELECT * FROM Cars WHERE model=?'
        return await query(sql, model)
    }

    async updateById(id, values){
        const sql = `UPDATE Cars SET ? WHERE id=${id};`
        return await query(sql, values)
    }

    async deleteById(id){
        const sql = 'DELETE FROM Cars WHERE id=?;'
        return await query(sql, id)
    }
}

module.exports = new Cars