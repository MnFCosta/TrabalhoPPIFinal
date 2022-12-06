const mongoose = require('../db/conn')
const { Schema } = mongoose

const Imagem = mongoose.model(
  'Imagem',
  new Schema({
    nome: {
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

module.exports = Imagem
