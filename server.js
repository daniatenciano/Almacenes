
// --- IMPORTACIONES
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const routes = require('./routes');
const config = require('./config');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/almacen', { useNewUrlParser: true })
  .then(db   => console.log ('Conexión correcta a la BD'))
  .catch(err => console.log ('Error en la conexión a la BD'));

// --- MIDDLEWARE
// Archivos estáticos. Deberás crear un archivo public/index.html para ver el resultado
app.use(express.static(path.join(__dirname, 'public')));

//Rutas
app.use('/api', routes);
app.use(express.json());
// Logger
app.use(morgan('dev'));

// --- PUERTO DE ESCUCHA
app.listen(3001, () => console.log('Servidor iniciado en puerto 3001'));
