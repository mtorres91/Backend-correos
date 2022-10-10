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




app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(cors());
app.use(require('./routes/correoRoutes'));

app.listen('3000', ()=>{

    console.log('escuchando');
})