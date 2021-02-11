const express = require('express')

const db = require('../db/animals')

const router = express.Router()

router.get('/', (req, res) => {
  db.getAnimals()
    .then(results => {
      res.json({ animals: results })
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router
