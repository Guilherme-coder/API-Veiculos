const connection = require('../infraestructure/database/connection')
const repositories = require('../repositories/motorcycles')
const Tables = require('../infraestructure/database/tables')

class Motorcycles{
    post(values){
        const valuesWithData = Tables.addDateToJson(values)

        return repositories.post(valuesWithData)
    }

    getAll(){
        return repositories.getAll()
    }

    getById(id){
        return repositories.getById(id)
    }

    updateById(id, values){
        return repositories.updateById(id, values)
    }

    deleteById(id){
        return repositories.deleteById(id)
    }

}

module.exports = new Motorcycles