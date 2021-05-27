const query = require('../infraestructure/database/queries')

class Cars{
    post(values){
        const sql = 'INSERT INTO Cars SET ?;'
        return query(sql, values)
    }

    getAll(){
        const sql = 'SELECT * FROM Cars;'
        return query(sql)
    }

    getById(id){
        const sql = 'SELECT * FROM Cars WHERE id=?;'
        return query(sql, id)
    }

    updateById(id, values){
        const sql = `UPDATE Cars SET ? WHERE id=${id};`
        return query(sql, values)
    }

    deleteById(id){
        const sql = 'DELETE FROM Cars WHERE id=?;'
        return query(sql, id)
    }
}

module.exports = new Cars