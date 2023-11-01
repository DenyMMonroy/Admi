import express from "express";
import 
{ 
    vista_principal,
    vista_login,
    vista_registro,
    vista_perfil,
    vista_resumen,
    vista_sprints,
    vista_calendario,
    vista_informes
} from '../controllers/user_controlers.js';


const router = express.Router();

//vista principal
//nombre de la ruta y su controlador 
router.get ('/', vista_principal)
//vista login
router.get('/login', vista_login)
//vista registro
router.get('/registro', vista_registro)
//vista perfil
router.get('/perfil', vista_perfil)
//vista resumen
router.get('/resumen', vista_resumen)
//vista de sprints 
router.get('/sprints', vista_sprints)
//vista calendario
router.get('/calendario', vista_calendario)
//vista informes
router.get('/informes', vista_informes)

export default router;