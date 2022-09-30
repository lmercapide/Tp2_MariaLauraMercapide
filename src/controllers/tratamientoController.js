const models = require('../database/models/index')
const models = require('../database/models/index')
module.exports = {

    listar: async(req, res) => {
   
        const trat = await models.tratamiento.findAll()
            
        res.json({
            sucess: true,
            data: {

                tratamientos: trat
            }


        })


    },
    crear: async(req, res) => {

        
    },
    listarInfo: async(req, res) => {

        const trat = await models.tratamiento.create(req.body)

        res.json({

                success: true,
                data:{

                        id: trat.id
                }
        
    })
        
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

