const express = require('express');
const path = require('path');
const colors = require('colors');
const Contato = require('../models/contato');
const app = express();


app.get('/', (req, res) => {
    res.render(path.join(__dirname, '../../public/views/home'));
});

app.post('/send', (req, res) => {
    
    let body = req.body;

    let contato = new Contato({
        nome: body.nome,
        email: body.email,
        mensagem: body.mensagem
    });

    contato.save((err, contatoDB) => {

        if(err) {
            return console.log(`${err}`.red);
        }

        res.render(path.join(__dirname, '../../public/views/home'), {
            ajuda: '<br><br><p class="text-center">Mengem enviada com sucesso</p>'
        });

        console.log(`${contatoDB}`.green);

    });

});

module.exports = app;