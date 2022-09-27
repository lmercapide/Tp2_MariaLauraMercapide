const models = require('../database/models/index')

module.exports = {

    listar: async(req, res) => {


    },
    crear: async(req, res) => {

        
    },
    listarInfo: async(req, res) => {

        
    },
    prueba: async(req, res) => {
                try {

                    console.log(`Ejecutando listado de Tratamientos desde puerto`)
                    res.json({
                      
                        message: "Listado de Tratamientos"

                    })
                } catch (err){
                    console.log(err)


                }
     },
        
    }

