const mongoose = require('mongoose');

const envioSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true, trim: true },
    remitente: { type: String, required: true },
    destinatario: { type: String, required: true },
    direccion: { type: String, required: true },
    estado: { type: String, required: true }
}, {
    toJSON: {
        transform: (doc, ret) => {
            delete ret._id; // Elimina el _id de MongoDB en la respuesta JSON
            delete ret.__v; // Elimina el campo de versión __v
            return ret;
        }
    }
});

const Envio = mongoose.model('Envio', envioSchema);
module.exports = Envio;