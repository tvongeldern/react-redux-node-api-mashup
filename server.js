'use strict';
const express = require('express');
const path = require('path');

const mashupHandler = require('./src/server/handlers/mashup');

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'app', 'index.html'));
});

app.get('/rest/mashup/', mashupHandler);

[ '.js', '.css' ].forEach((ext) => {
    const filename = 'bundle' + ext;
    const location = '/' + filename;
    app.get(location, (req, res) => {
        res.sendFile(path.join(__dirname, 'dist', filename));
    });
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'app', 'index.html'));
});

app.listen('3000', () => {
    console.log("Server running on port 3000");
});
