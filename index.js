const express = require('express');
const app = express();
let cors = require('cors');
    


const bodyparser = require('body-parser');


app.use(express.json());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.use(require('./routes/correoRoutes'));
app.use(cors());
app.get('/',(req,res)=>
    {res.send('hello world')

    })

app.listen('3000', ()=>{

    console.log('escuchando');
})