const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const colors = require('colors');
const port = process.env.POER || 3000 || 8080;
const app = express();

app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public/arquivosCss'));
app.use(express.static(__dirname + '/public/arquivosJavascript'));
app.use(express.static(__dirname + '/public/imagens'));


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use(require('./backend/routes/home'));


mongoose.connect('mongodb://localhost:27017/mySite', {
    useCreateIndex: true,
    useNewUrlParser: true
}, (err, conected) => {

    if(err) {
        return console.log(`${err}`.red);
    }

    console.log('===================================');
    console.log('Base de dados online'.cyan);

});


app.listen(3000, () => console.log(`Servidor rodando na porta 3000`.cyan));