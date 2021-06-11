const Cars = require('../models/cars')

module.exports = app => {
    // post de um carro
    app.post('/api/carros/', async (req, res) => {
        try{
            const values = req.body
            if(!values.brand || !values.model)
                throw new Error('A marca ou modelo não pode ser vazio.')
            if(JSON.stringify(await Cars.getByModel(values.model)).length > 2)
                throw new Error(`O modelo ${values.model} já está cadastrado`)
            Cars.post(values)
                .then(results => {
                    res.status(201).json(values)
                })
        }catch(err){
            res.status(400).json({ message: err.message })
        }


    })
    
    // get de todos os carros
    app.get('/api/carros/', async (req, res) => {
        try{
            await Cars.getAll()
                .then(results => {
                    res.status(200).json(results)
                })
        }catch(err){
            res.status(400).json({ message: err.message })
        }
        
        
    })

    // get de um carro pelo id
    app.get('/api/carros/:id', async (req, res) => {
        try{
            const id = parseInt(req.params.id)
            await Cars.getById(id)
                .then(results => {
                    if(results.length === 0)
                        throw new Error('Carro não cadastrado.')
                    res.status(200).json(results)
                })
        }catch(err){
            res.status(404).json({ message: err.message })
        }
        
    })

    // atualiza os dados de um carro pelo id
    app.put('/api/carros/:id', async (req, res) => {
        try{
            const values = req.body
            const id = req.params.id
            await Cars.updateById(id, values)
                .then(results => {
                    res.status(201).json(values)
                })
        }catch(err){
            res.status(400).json({ message: err.message })
        }
        
    })

    // remove carro pelo id
    app.delete('/api/carros/:id', async (req, res) => {
        try{
            const id = parseInt(req.params.id)
            if(JSON.stringify(await Cars.getById(id)).length <= 2)
                throw new Error('O carro não existe, logo não é possível deletá-la.')
            await Cars.deleteById(id)
                .then(results => {
                    res.status(200).json(results)
                })
        }catch(err){
            res.status(400).json({ message: err.message })
        }
        
    })
}