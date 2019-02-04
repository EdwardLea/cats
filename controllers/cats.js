const Cat = require('../models/cat')

function indexRoute(req, res) {
  Cat
    .find()
    .then(cats => res.status(200).json(cats))
}

function createRoute(req, res) {
  Cat
    .create(req.body)
    .then(cat => res.status(201).json(cat))
    .catch(err => res.status(422).json(err.errors))
}

module.exports ={
  index: indexRoute,
  create: createRoute
}
