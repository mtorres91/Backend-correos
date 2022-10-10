const express = require('express');
const app = express();
let cors = require('cors');
    

const bodyparser = require('body-parser');

app.use(
    cors({
        origin: "*"
    }
));


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.use(require('./routes/correoRoutes'));

app.get('/',(req,res)=>
    {res.send('hello world')

    })

app.listen('3000', ()=>{

    console.log('escuchando');
})