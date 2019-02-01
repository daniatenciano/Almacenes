const mongoose = require('mongoose');

const Proveedor = mongoose.model('Proveedor', {
    nombre: String,
    apellidos: String,
    edad: Number,
    dni: String
});

const Producto = mongoose.model('Producto', {
    nombre: String,
    precio: NumbProveedorer,
    cantidad: Number,
    disponibilidad: Boolean
});

module.exports = {
    Proveedor,
    Producto
};