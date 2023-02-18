const express = require('express')
const { createUser, deleteUser, getUserById, getUsers, updateUser } =  require('../controllers/user_controller')

const router = express.Router()

router.get('/users/:role', getUsers)
router.get('/users/:nik', getUserById)
router.post('/users', createUser)
router.patch('/users/:nik',updateUser)
router.delete('/users/:nik', deleteUser)

module.exports = router

