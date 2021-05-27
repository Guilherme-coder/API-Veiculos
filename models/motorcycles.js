const connection = require('../infraestructure/database/connection')
const repositories = require('../repositories/motorcycles')

class Motorcycles{
    post(values){
        return repositories.post(values)
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