const express = require('express');
const app = express();
let cors = require('cors');


let envio = require('../controllers/correoController');

app.use(cors());

app.post('/envio',envio.envioCorreo);



module.exports = app;