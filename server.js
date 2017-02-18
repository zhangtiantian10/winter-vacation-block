const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = new express();
const addBlock = require('./server/routers/add-block');
const addUser = require('./server/routers/add-user');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));
app.use(session({
    secret: 'a',
    resave: true,
    saveUninitialized: true,
}));

app.use('/', addBlock);
app.use('/addUser',addUser);

app.get('*', (req, res) => {
    "use strict";
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

var server = app.listen(3000, () => {
    console.log('listening at port %s', server.address().port);
});

module.exports = server;