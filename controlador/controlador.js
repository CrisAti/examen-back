export class Controlador {
    constructor(modelo) {
        this.modelo = modelo;
    }
    obtenerTodos = async (req, res) => {
        try {
            const modelo = await this.modelo.obtenerTodos();
            res.json(modelo);
        } catch (error) {
            res.status(500).json({ error: "Error al obtener la informacion" });
        }
    };
    
    crear = async (req, res) => {
        const modelo = req.body;
        try {
            const nuevoModelo = await this.modelo.crear(modelo);
            res.status(201).json(nuevoModelo);
        } catch (error) {
            console.error("Error al crear la información:", error);
            res.status(500).json({ error: "Error al crear la informacion" });
        }
    };

}