const express = require('express')
const model = require('./model.js')

const router = express.Router()

router.get('/', (req, res) => {
    model.getProjects()
    .then(projects => res.status(200).json(projects))
    .catch(() => res.status(500).json({message: "Failed to obtain projects from the server"}))
})

router.post('/', (req, res) => {
    model.addProject(req.body)
    .then(project => res.status(201).json(project))
    .catch(() => res.status(500).json({message: "Failed to add project"}))
})

module.exports = router