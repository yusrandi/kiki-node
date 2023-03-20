const express = require('express')
const { createAbsen, getAbsen, getCheckAbsen, getAbsenByRole } = require('../controllers/absen_controller')

const router = express.Router()

router.get('/absens', getAbsen)
router.get('/absens/:nik/:bulan', getCheckAbsen)
router.get('/absens/:role', getAbsenByRole)
router.post('/absens', createAbsen)

module.exports = router

