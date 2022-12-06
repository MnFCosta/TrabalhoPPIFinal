const User = require('../models/User')
const mongoose = require('mongoose')


module.exports = class UserController {
  
  static async mostrarUsers(req, res) {
    const users = await User.find({}).lean()

    res.render('users/all', { users })
  }

  static criarUser(req, res) {
    res.render('users/create')
  }

  static async criarUserPost(req, res) {

    const nome = req.body.nome
    const descricao = req.body.descricao

    const imagem = req.file.filename
    const user = new User({ nome, descricao, imagem })

    await user.save()

    res.redirect('/users')
  }

  static async buscaUser(req, res) {
    const id = req.params.id

    const user = await User.findById(id).lean()

    //console.log(user)

    res.render('users/detail', { user })
  }

  static async removeUser(req, res) {
    const id = req.params.id

    await User.deleteOne({ _id: id })

    res.redirect('/users')
  }

  static async editaUser(req, res) {
    const id = req.params.id

    const user = await User.findById(id).lean()

    res.render('users/edit', { user })
  }

  static async editaUserPost(req, res) {
    const id = req.body.id; 

    const nome = req.body.nome
    const descricao = req.body.descricao

    if (req.file) {

      const imagem = req.file.filename
      var user = { nome,  descricao, imagem }
    }
    else {
      var user = { nome, descricao }
    }

    await User.updateOne({ _id: id }, user)

    res.redirect('/users')
  }
}
