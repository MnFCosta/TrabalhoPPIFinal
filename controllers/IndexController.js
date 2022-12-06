const Imagem = require('../models/Imagem')
const User = require('../models/User')
const mongoose = require('mongoose')
const Receita = require('../models/Receita')


module.exports = class IndexController {
  
  static async mostrarIndex(req, res) {
    const imagems = await Imagem.find({}).lean()
    const users = await User.find({}).lean()
    const receitas = await Receita.find({}).lean()

    res.render('site/index', {layout: false, imagems, users, receitas })
  }
}
