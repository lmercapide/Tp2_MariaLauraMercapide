const express = require('express')

const globalConstants = require('./const/globalConstants')

const routerConfig = require('./routes/index.routes')

const configuracionApi= (app) => {
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))
   
}
configuracionRouter = (app)=> {
    app.use('/', routerConfig.rutas_init())
}
const init = () => {

    const app = express()
    configuracionApi(app)
    configuracionRouter(app)

   

   
    app.listen(globalConstants.PORT)
    console.log(`corriendo...` + globalConstants.PORT)   

}

init();

