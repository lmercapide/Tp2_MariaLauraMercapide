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
                    
                    console.log(`Ejecutando listado de Pacientes desde puerto`)
                    res.json({
                      
                        message: "Listado de Medicos"

                    })
                } catch (err){
                    console.log(err)


                }
     },
        
    }

