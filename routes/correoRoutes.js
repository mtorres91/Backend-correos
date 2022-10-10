const express = require('express');
const app = express();
let cors = require('cors');

app.use(
    cors({
        origin: "*"
    }
));
let envio = require('../controllers/correoController');

app.post('/envio',envio.envioCorreo);



module.exports = app;