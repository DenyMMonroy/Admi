import { User } from "../models/user_model.js"

export const vista_principal = async (req, res, next) => {
    //nombre de la pagina que tiene en ejs
    res.render('home')
}    
//vista de login
export const vista_login = async (req, res, next) => {
 res.render('login')
}
//vista y accion de registrar 
export const vista_registro = async (req, res, next) => {
        res.render("registro")
}
export const accion_registrar =  async (req, res, next) => {
    const user = await User.create(req.body)
    res.json(user)
}
//vista de sprints
export const vista_sprints = async (req, res, next) => {
    res.render("sprints")
}
//vista de calendario
export const vista_calendario = async (req, res, next) => {
    res.render("calendario")
}//vista de informes
export const vista_informes = async (req, res, next) => {
    res.render("informes")
}
//vista de resumen
export const vista_resumen = async (req, res, next) => {
    res.render("resumen")
}//vista de informes
export const vista_perfil = async (req, res, next) => {
    res.render("perfil")
}