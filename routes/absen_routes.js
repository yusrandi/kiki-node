const express = require('express')
const { createAbsen, getAbsen, getCheckAbsen } = require('../controllers/absen_controller')

const router = express.Router()

router.get('/absens', getAbsen)
router.get('/absens/:nik/:bulan', getCheckAbsen)
router.post('/absens', createAbsen)

module.exports = router

