const mongoose = require('mongoose')
const coll='produto'

const produtoSchema = new mongoose.Schema({
    img: String,
    nome: String,
    descricao: String,
    tamanho: String,
    valor: Number
})

module.exports = mongoose.model(coll,produtoSchema)