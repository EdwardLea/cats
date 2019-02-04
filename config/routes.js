const router = require('express').Router()
const catsController = require('../controllers/cats')

router.route('/cats')
  .get(catsController.index)
  .post(catsController.create)

module.exports = router
