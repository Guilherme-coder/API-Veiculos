const query = require('../infraestructure/database/queries')

class Motorcycles{
    async post(values){
        const sql = 'INSERT INTO Motorcycles SET ?;' 
        return await query(sql, values)
    }

    async getAll(){
        const sql = 'SELECT * FROM Motorcycles ORDER BY data DESC;'
        return await query(sql)
    }

    async getById(id){
        const sql = 'SELECT * FROM Motorcycles WHERE id=?'
        return await query(sql, id)
    }
    
    async getByModel(model){
        const sql = 'SELECT * FROM Motorcycles WHERE model=?'
        return await query(sql, model)
    }

    async updateById(id, values){
        const sql = `UPDATE Motorcycles SET ? WHERE id=${id};`
        return await query(sql, values)
    }

    async deleteById(id){
        const sql = 'DELETE FROM Motorcycles WHERE id=?'
        return await query(sql, id)
    }
}

module.exports = new Motorcycles