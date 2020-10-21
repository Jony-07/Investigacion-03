const { Router } = require('express');
const enrutador = new Router();
const _ = require('underscore');

//Requerir Json
const datos = require('../datos.json');
//Tomar registros
enrutador.get('/', (req, res) => {
    res.json(datos);
});
//Agregar registro
enrutador.post('/', (req, res) => {
    
    const { titulo,autor,editorial,año,lugar } = req.body;
    const id = 'BK'+año+(datos.length + 1);
    const newbook = { id,...req.body };
    if (id && titulo && autor && editorial && año && lugar) {
        datos.push(newbook);
        res.json(datos);
    } else {
        res.status(500).json({error: 'There was an error.'});
    }
});

//Actualizar registro
enrutador.put('/:id', (req, res) => {
    const { id } = req.params;
    const { titulo, autor, editorial, año, lugar } = req.body;
    if (id && titulo && autor && editorial && año && lugar) {
        _.each(datos, (book, i) => {
            if (book.id === id) {
                book.titulo = titulo;
                book.autor = autor;
                book.editorial = editorial;
                book.año = año;
                book.lugar=lugar;
            }
        });
        res.json(datos);
    } else {
        res.status(500).json({error: 'There was an error.'});
    }
});

//Eliminar
enrutador.delete('/:id', (req, res) => {
    const {id} = req.params;
    if (id) {
        _.each(datos, (book, i) => {
            if (book.id == id) {
                datos.splice(i, 1);
            }
        });
        res.json(datos);
    }
});







//Exportar
module.exports = enrutador;