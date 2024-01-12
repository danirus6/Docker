const express = require('express')
const router = express.Router()
const userController = require('../controllers/UserController')

router.post('/', userController.create)
router.get('/getAll', userController.getAll)
router.get('/getById/:_id', userController.getById)
router.get('/name/:name', userController.getUsersByName)
router.delete('/:_id', userController.delete)
router.put('/update/:_id', userController.update)

module.exports = router
