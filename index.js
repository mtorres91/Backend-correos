const express = require('express');
const app = express();
let cors = require('cors');
services.AddCors(options =>

    {
    
    options.AddPolicy(
    
    name, "AllowOrigin",
    
    builder => {
    
    builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
    
    });
    
    });
    

const bodyparser = require('body-parser');



app.use(cors(corsOptions));
app.UseCors("AllowOrigin");

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();});

    // Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.use(require('./routes/correoRoutes'));

app.listen('3000', ()=>{

    console.log('escuchando');
})