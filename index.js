const express = require('express');
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}
var cors = require('cors')

var app = express()
app.use(cors())

const bodyparser = require('body-parser');



app.use(cors(corsOptions)) 

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.use(require('./routes/correoRoutes'));

app.listen('3000', ()=>{

    console.log('escuchando');
})