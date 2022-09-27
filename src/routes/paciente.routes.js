const router = require('express').Router()

const pacienteController= require('../controllers/pacienteController')
router.get('/', pacienteController.prueba)
router.post('/', pacienteController.crear)
router.get('/:idPaciente', pacienteController.listarInfo)

module.exports = router