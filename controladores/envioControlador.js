const Envio = require('../modelos/envio');

const crearEnvio = async (req, res) => {
    try {
        // Usamos 'new Envio' asegurándonos de que la constante coincida con el require
        const nuevoEnvio = new Envio(req.body);
        await nuevoEnvio.save();
        res.status(201).json(nuevoEnvio);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const obtenerEnvio = async (req, res) => {
    try {
        const envioEncontrado = await Envio.findOne({ id: req.params.id });
        if (!envioEncontrado) {
            return res.status(404).json({ message: 'Envio no encontrado' });
        }
        res.json(envioEncontrado);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const cambiarEstadoEnvio = async (req, res) => {
    try {
        const envioActualizado = await Envio.findOneAndUpdate(
            { id: req.params.id },
            { estado: req.body.estado },
            { new: true }
        );
        if (!envioActualizado) {
            return res.status(404).json({ message: 'Envio no encontrado' });
        }
        res.json(envioActualizado);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const obtenerEnviosActivos = async (req, res) => {
    try {
        const enviosActivos = await Envio.find({ estado: 'activo' });
        res.json(enviosActivos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.crearEnvio = crearEnvio;
exports.obtenerEnvio = obtenerEnvio;
exports.cambiarEstadoEnvio = cambiarEstadoEnvio;
exports.obtenerEnviosActivos = obtenerEnviosActivos;