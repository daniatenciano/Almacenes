
// --- IMPORTACIONES
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const routes = require('./routes');
const config = require('./config');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(config.db_uri, { useNewUrlParser: true })
  .then(db   => console.log ('Conexión correcta a la BD'))
  .catch(err => console.log ('Error en la conexión a la BD'));

// --- MIDDLEWARE
// Archivos estáticos. Deberás crear un archivo public/index.html para ver el resultado
//app.use(express.static(path.join(__dirname, 'public')));

// --- MIDDLEWARE
// Para redirigir trafico HTTP a HTTPS
app.use((req, res, next) => {
  if (req.header('x-forwarded-proto') !== 'https')
    res.redirect(`https://${req.header('host')}${req.url}`);
  else
    next();
});


//Rutas
app.use('/api', routes);
app.use(express.json());
// Logger
app.use(morgan('dev'));

// --- PUERTO DE ESCUCHA
app.listen(config.port, () => console.log('Servidor iniciado en puerto 3000'));
