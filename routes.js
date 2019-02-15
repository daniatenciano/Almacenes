const express = require('express');

const { Proveedor } = require('./models');

const router = express.Router();

// ver todos los proveedores
router.get('/proveedor', (req, res) => {
    Proveedor.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
});
// ver todos los productos
router.get('/producto', (req, res) => {
    Proveedor.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
});

// ver un proveedores
router.get('/proveedor/:id', (req, res) => {
    Proveedor.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
});

// ver un producto
router.get('/producto/:id', (req, res) => {
    Proveedor.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
});

// eliminar un proveedores
router.delete('/proveedor/:id', (req, res) => {
    Proveedor.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
});

// eliminar un producto
router.delete('/producto/:id', (req, res) => {
    Proveedor.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
});

// actualizar un proveedores
router.put('/proveedor/:id', (req, res) => {
    Proveedor.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { nombre: req.body.nombre, apellidos: req.body.apellidos, edad: req.body.edad, dni: req.body.dni} },
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        });
});

// actualizar un producto
router.put('/producto/:id', (req, res) => {
    Proveedor.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { precio: req.body.precio, cantidad: req.body.cantidad, disponibilidad: req.body.disponibilidad} },
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        });
});

// insertar un proveedores
router.post('/proveedor', (req, res) => {
    const proveedor = new Proveedor({ 
                          nombre: req.body.nombre, 
                          apellidos: req.body.apellidos, 
                          edad: req.body.edad,
                          dni: req.body.dni
                        });

    proveedor.save((err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });
});

// insertar un producto
router.post('/producto', (req, res) => {
    const producto = new Producto({ 
                          precio: req.body.precio, 
                          cantidad: req.body.cantidad, 
                          disponibilidad: req.body.disponibilidad
                        });

    producto.save((err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });
});

module.exports = router;