const mongoose = require('../db/conn')
const { Schema } = mongoose

const Receita = mongoose.model(
  'Receita',
  new Schema({
    nome: {
      type: String,
      required: true,
    },
    ingredientes: {
      type: String,
      required: true,
    },
    descricao: {
      type: String,
      required: true,
    },
    imagem: {
      type: String,
      required: false,
    },
  }),
)

module.exports = Receita
