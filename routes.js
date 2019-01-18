const express = require('express');

const { Proveedor } = require('./models');

const router = express.Router();

// ver todos los proveedores
router.get('/proveedores', (req, res) => {
    Proveedor.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
});

// ver un proveedores
router.get('/proveedores/:id', (req, res) => {
    Proveedor.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
});

// eliminar un proveedores
router.delete('/proveedores/:id', (req, res) => {
    Proveedor.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
});

// actualizar un proveedores
router.put('/proveedores/:id', (req, res) => {
    Proveedor.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { nombre: req.body.nombre, apellidos: req.body.apellidos, edad: req.body.edad, dni: req.body.dni} },
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        });
});

// insertar un proveedores
router.post('/proveedores', (req, res) => {
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

module.exports = router;