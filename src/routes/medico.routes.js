const router = require('express').Router()

const medicoController= require('../controllers/medicoController')
router.get('/', medicoController.prueba)
router.post('/', medicoController.crear)
router.get('/:idMedico', medicoController.listarInfo)

module.exports = router