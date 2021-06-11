const Motorcycles = require('../models/motorcycles')

module.exports = app => {
    // post de uma moto
    app.post('/api/motocicletas/', async (req, res) => {
        try{
            const values = req.body
            if(!values.brand || !values.model)
                throw new Error('A marca ou modelo não pode ser vazio.')
            if(JSON.stringify(await Motorcycles.getByModel(values.model)).length > 2)
                throw new Error(`O modelo ${values.model} já está cadastrado`)
            await Motorcycles.post(values)
                .then(results => {
                    res.status(201).json(values)
                })
        }catch(err){
            res.status(400).json({ messsage: err.message })
        }
        
    })
    
    // get de todas as motos
    app.get('/api/motocicletas/', async (req, res) => {
        try{
            await Motorcycles.getAll()
                .then(results => {
                    res.status(200).json(results)
                })
        }catch(err){
            res.status(400).json({ message: err.message })
        }
        
    })

    // get de uma moto por id
    app.get('/api/motocicletas/:id', async (req, res) => {
        try{
            const id = parseInt(req.params.id)
            await Motorcycles.getById(id)
                .then(results => {
                    if(results.length === 0)
                        throw new Error('Motocicleta não cadastrada.')
                    res.status(200).json(results)
                })
        }catch(err){
            res.status(404).json({ message: err.message })
        }
        
        
    })

    // atualiza moto por id
    app.put('/api/motocicletas/:id', async (req, res) => {
        try{
            const values = req.body
            const id = parseInt(req.params.id)
            await Motorcycles.updateById(id, values)
                .then(results => {
                    res.status(201).json(values)
                })
        }catch(err){
            res.status(400).json({ message: err.message })
        }
    })

    // remove moto com id
    app.delete('/api/motocicletas/:id', async (req, res) => {
        try{
            const id = parseInt(req.params.id)
            if(JSON.stringify(await Motorcycles.getById(id)).length <= 2)
                throw new Error('A motocicleta não existe, logo não é possível deletá-la.')
            await Motorcycles.deleteById(id)
                .then(results => {
                    res.status(200).json(results)
                })
        }catch(err){
            res.status(400).json({ message: err.message })
        }
        
        
    })
}