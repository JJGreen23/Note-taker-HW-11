const fs = require('fs');

const notes = require('../db/db.json');

module.exports = (app) => {

    app.get('/api/notes', (req, res) => res.json(notes));

    app.post('api/notes', (req, res) => {

        if (notes.length < 5) {

            notes.push(req.body);

            res.json(true);

        } else {

            res.json(false);
            
        }
    });

    app.post('api/notes', (req, res) => {
        
        notes.length = 0;

        res.json({ok: true});
    });
};