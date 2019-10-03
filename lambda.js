const router = require('express').Router()
const db = require('./dbConfig.js')

router.post('/', (req, res) => {
  if(!req.body.description) {
    res.status(400).json({ error: 'missing required field: description' })
  } else {
    db('lambda').insert(req.body)
      .then(ids => {
        const id = ids[0]
        db('lambda').where({ id: id }).first()
          .then(product => {
            res.status(201).json(product)
          })
      }).catch(err => res.status(500).json(err))
  }
})

router.get('/', (req, res) => {
  db('lambda').then(product => {
    res.status(200).json(product)
  }).catch(err => res.status(500).json(err))
})

module.exports = router
