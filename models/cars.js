const connection = require("../infraestructure/database/connection")
const repositorie = require('../repositories/cars')

class Cars{
    post(values){
        return repositorie.post(values)
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