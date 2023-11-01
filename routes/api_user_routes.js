import express from "express";

import 
{ 
    accion_registrar  
} from '../controllers/user_controlers.js';

//construcion de las api (post/put/delete/etc)
const api_user_routes = express.Router();

api_user_routes.post ('/registro', accion_registrar );

export default api_user_routes;