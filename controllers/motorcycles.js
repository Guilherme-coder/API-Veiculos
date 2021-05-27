const Motorcycles = require('../models/motorcycles')

module.exports = app => {
    // post de uma moto
    app.post('/motocicletas/cadastrar', (req, res) => {
        const values = req.body
        Motorcycles.post(values)
            .then(results => {
                res.status(201).json(values)
            })
            .catch(err => {
                res.status(400).json(err)
            })
    })
    
    // get de todas as motos
    app.get('/motocicletas', (req, res) => {
        Motorcycles.getAll()
            .then(results => {
                res.status(200).json(results)
            })
            .catch(err => {
                res.status(400).json(err)
            })
    })

    // get de uma moto por id
    app.get('/motocicletas/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Motorcycles.getById(id)
            .then(results => {
                res.status(200).json(results)
            })
            .catch(err => {
                res.status(400).json(err)
            })
    })

    // atualiza moto por id
    app.patch('/motocicletas/editar/:id', (req, res) => {
        const values = req.body
        const id = parseInt(req.params.id)
        Motorcycles.updateById(id, values)
            .then(results => {
                res.status(201).json(values)
            })
            .catch(err => {
                res.status(400).json(err)
            })
    })

    // remove moto com id
    app.delete('/motocicletas/remover/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Motorcycles.deleteById(id)
            .then(results => {
                res.status(200).json(results)
            })
            .catch(err => {
                res.status(400).json(err)
            })
    })
}