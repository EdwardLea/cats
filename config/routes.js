const router = require('express').Router()
const catsController = require('../controllers/cats')

router.route('/cats/:id')
  .get(catsController.show)
  .put(catsController.update)
  .delete(catsController.delete)


router.route('/cats')
  .get(catsController.index)
  .post(catsController.create)



module.exports = router
