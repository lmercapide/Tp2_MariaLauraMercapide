const { UPSERT } = require('sequelize/types/query-types')
const models = require('../database/models/index')

module.exports = {

    listar: async(req, res) => {

            const medi = await models.medico.findAll()
            
            res.json({
                sucess: true,
                data: {

                    medicos: medi
                }


            })

    },
    crear: async(req, res) => {
          
     
        
    },
    listarInfo: async(req, res) => {
        
        const medi = await models.medico.create(req.body)

        res.json({

                success: true,
                data:{

                        id: user.id
                }

        })
        
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

