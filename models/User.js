const mongoose = require('../db/conn')
const { Schema } = mongoose

const Usuario = mongoose.model(
  'Usuario',
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

module.exports = Usuario
