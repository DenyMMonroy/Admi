import express from 'express'


import user_routes from './routes/user_routes.js'
import db from './config/db.js'
import api_user_routes from './routes/api_user_routes.js'

//creando servidor
const app = express()

//habilitar lectura de datos de formularios
app.use(express.urlencoded({extended:true}))
app.use(express.json());

// conexion a la bd
try {
    await db.authenticate();
    db.sync()
    console.log('Conexion correcta a la base de datos')
} catch (error){
    console.log(error)
}

//habilitar ejs
//app.use(expressLayouts);
app.set('view engine', 'ejs')

//ubicacion vistas 
app.set('views','./views')

//Carpeta publica
app.use( express.static('public'));

//ROUTING
app.use('/',user_routes)
app.use('/api',api_user_routes)

//definir puerto y arranque de prouyecto
const port = 3000;


app.listen(port, () =>{
 console.log(`El servidor funciona en el puerto ${port}`)
});