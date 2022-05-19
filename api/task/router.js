const express = require('express')
const model = require('./model.js')

const router = express.Router()
router.get('/', (req, res, next) => {
    model.getTasks()
    .then(tasks => res.status(200).json(tasks))
    .catch( err => next(err))
})

router.post('/', (req, res, next) => {
    model.addTask(req.body)
    .then(task => res.status(201).json(task))
    .catch( err => next(err))
})



module.exports = router
