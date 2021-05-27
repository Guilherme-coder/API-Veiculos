const query = require('../infraestructure/database/queries')

class Motorcycles{
    post(values){
        const sql = 'INSERT INTO Motorcycles SET ?;' 
        return query(sql, values)
    }

    getAll(){
        const sql = 'SELECT * FROM Motorcycles;'
        return query(sql)
    }

    getById(id){
        const sql = 'SELECT * FROM Motorcycles WHERE id=?'
        return query(sql, id)
    }

    updateById(id, values){
        const sql = `UPDATE Motorcycles SET ? WHERE id=${id};`
        return query(sql, values)
    }

    deleteById(id){
        const sql = 'DELETE FROM Motorcycles WHERE id=?'
        return query(sql, id)
    }
}

module.exports = new Motorcycles