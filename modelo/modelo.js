import mongoose, { Schema, model } from "mongoose";
import { conexion } from "../conexion/conexion.js";

conexion();

const modelSchema = new Schema(
    {
        producto:String,
        precioAnterior:String,
        precioActual:String,
        porcentajeInflacion:String,
        descripcion: String
    },
    {
    versionKey: false
    }
);

const modelo = model("Modelo",modelSchema); 

export class Modelo {
    static async obtenerTodos(){
        try{
            return await modelo.find()
        } catch (e){
            console.log(e);
        }
    }

    static async crear(datos) {
        const nuevoModelo = new modelo(datos);
        try {
            const modeloCreado = await nuevoModelo.save(); 
            return modeloCreado; 
        } catch (e) {
            console.error("Error al guardar el modelo en la base de datos:", e);
            throw new Error("No se pudo crear el modelo");
        }
    }
    
}
export { modelo };