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
function showRoute(req, res) {
  Cat
    .findById(req.params.id)
    .then(cat => res.status(200).json(cat))
    .catch(err => res.status(422).json(err.errors))
}

function updateRoute (req, res) {
  Cat
    .findById(req.params.id) //finding film by id passed in via the URL
    .then(cat => cat.set(req.body)) // set value of found cat to req body
    .then(cat => cat.save()) // saving cat to database
    .then(cat => res.status(200).json(cat)) // sending status and json response
    .catch(err => res.status(422).json(err.errors))
}

function deleteRoute (req, res) {
  Cat
    .findById(req.params.id)
    .then(cat => cat.remove())
    .then(() => res.sendStatus(204))
}

module.exports ={
  index: indexRoute,
  create: createRoute,
  update: updateRoute,
  delete: deleteRoute,
  show: showRoute
}
