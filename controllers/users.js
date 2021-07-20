const Users = require('../models/users')

module.exports = app => {
    app.post('/api/users/', async (req, res) => {
        const values = req.body
        if(!values.email) return res.status(400).json('email não informado')
        if(!values.password) return res.status(400).json('password não informado')

        await Users.post(values)
            .then(results => res.status(201).json(results))
            .catch(err => res.status(400).json({ error: err.message }))
    })

    app.get('/api/users/', async (req, res) => {
        await Users.getAll()
            .then(results => res.status(200).json(results))
            .catch(err => res.status(400).json({ error: err.message }))
    })

    app.get('/api/users/:id', async (req, res) => {
        const id = req.params.id
        await Users.getById(id)
            .then(results => res.status(200).json(results))
            .catch(err => res.status(400).json({ error: err.message }))
    })

    app.post('/api/users/credentials/', async (req, res) => {
        const data = req.body
        await Users.checkCredentials(data.email, data.password)
            .then(results => res.status(200).json(results))
            .catch(err => req.status(400).json({ error: err.message }))
    })

    app.post('/api/users/email/', async (req, res) => {
        const email = req.body.email
        await Users.checkEmail(email)
            .then(results => res.status(200).json(results))
            .catch(err => res.status(400).json({ error: err.message }))
    })

    app.put('/api/users/:id', async (req, res) => {
        const id = req.params.id
        const values = req.body
        await Users.updateById(id, values)
            .then(results => res.status(201).json(results))
            .catch(err => res.status(400).json({error: err.message}))
    })
}