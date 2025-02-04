import {Router} from "express";
import { Controlador } from "../controlador/controlador.js";

export const EnrutadorArticulo =(modelo) =>{
    
const controlador=new Controlador(modelo);
const rutas=Router();

rutas.get('/',controlador.obtenerTodos)

rutas.post('/',controlador.crear)

return rutas;
}