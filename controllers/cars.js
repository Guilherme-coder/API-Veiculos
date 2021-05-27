const Cars = require('../models/cars')

module.exports = app => {
    // post de um carro
    app.post('/carro/cadastrar', (req, res) => {
        const values = req.body
        Cars.post(values)
            .then(results => {
                res.status(201).json(values)
            })
            .catch(err => {
                res.status(400).json(err)
            })
    })
    
    // get de todos os carros
    app.get('/carros', (req, res) => {
        Cars.getAll()
            .then(results => {
                res.status(200).json(results)
            })
            .catch(err => {
                res.status(400).json(err)
            })
    })

    // get de um carro pelo id
    app.get('/carros/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Cars.getById(id)
            .then(results => {
                res.status(200).json(results)
            })
            .catch(err => {
                res.status(400).json(err)
            })
    })

    // atualiza os dados de um carro pelo id
    app.patch('/carros/editar/:id', (req, res) => {
        const values = req.body
        const id = req.params.id
        Cars.updateById(id, values)
            .then(results => {
                res.status(201).json(values)
            })
            .catch(err => {
                res.status(400).json(err)
            })
    })

    // remove carro pelo id
    app.delete('/carros/remover/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Cars.deleteById(id)
            .then(results => {
                res.status(200).json(results)
            })
            .catch(err => {
                res.status(400).json(err)
            })
    })
}