const connection = require("../infraestructure/database/connection")
const repositorie = require('../repositories/cars')
const Tables = require('../infraestructure/database/tables')

class Cars{
    post(values){
        const valuesWithData = Tables.addDateToJson(values)

        return repositorie.post(valuesWithData)
    }

    getAll(){
        return repositorie.getAll()        
    }

    getById(id){
        return repositorie.getById(id)
        
    }

    updateById(id, values){
        return repositorie.updateById(id, values)
    }

    deleteById(id){
        return repositorie.deleteById(id)
    }
}

module.exports = new Cars