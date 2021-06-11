const connection = require('../infraestructure/database/connection')
const repositories = require('../repositories/motorcycles')
const Tables = require('../infraestructure/database/tables')

class Motorcycles{
    async post(values){
        const valuesWithData = Tables.addDateToJson(values)
        return await repositories.post(valuesWithData)
    }

    async getAll(){
        return await repositories.getAll()
    }

    async getById(id){
        return await repositories.getById(id)
    }

    async getByModel(model){
        return await repositories.getByModel(model)
    }

    async updateById(id, values){
        return await repositories.updateById(id, values)
    }

    async deleteById(id){
        return await repositories.deleteById(id)
    }

}

module.exports = new Motorcycles