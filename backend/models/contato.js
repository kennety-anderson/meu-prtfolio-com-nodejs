const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contatoSchema = new Schema({
    nome: {
        type: String,
        required: [true, 'E necessario um nome.']
    },
    email: {
        type: String,
        required: [true, 'E necessario um email.']
    },
    mensagem: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Contato', contatoSchema);