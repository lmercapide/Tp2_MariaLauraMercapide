const router = require('express').Router()

const tratamientoController= require('../controllers/tratamientoController')
router.get('/', tratamientoController.prueba)
router.post('/', tratamientoController.crear)
router.get('/:idTratamiento', tratamientoController.listarInfo)

module.exports = router