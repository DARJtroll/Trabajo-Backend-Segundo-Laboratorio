const express = require('express');
require('dotenv').config();
const conectarDB = require('./connect');
const cors = require('cors');

const app = express();

conectarDB();

app.use(cors());
app.use(express.json());

// Importamos los Controladores
const envioControlador = require('./controladores/envioControlador');

app.get('/api/envio/:id', envioControlador.obtenerEnvio);
app.post('/api/envio', envioControlador.crearEnvio);
app.put('/api/envio/:id/estado', envioControlador.cambiarEstadoEnvio);
app.get('/api/envios/activos', envioControlador.obtenerEnviosActivos);
const PORT = process.env.PUERTO || 3000;


app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
});