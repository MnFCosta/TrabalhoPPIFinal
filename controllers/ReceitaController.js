const Receita = require('../models/Receita')
const mongoose = require('mongoose')


module.exports = class ReceitaController {
  
  static async mostrarReceitas(req, res) {
    const receitas = await Receita.find({}).lean()

    res.render('receitas/all', { receitas })
  }

  static criarReceita(req, res) {
    res.render('receitas/create')
  }

  static async criarReceitaPost(req, res) {

    const nome = req.body.nome
    const descricao = req.body.descricao
    const ingredientes = req.body.ingredientes

    const imagem = req.file.filename
    const receita = new Receita({ nome, descricao, imagem, ingredientes })

    await receita.save()

    res.redirect('/receitas')
  }

  static async buscaReceita(req, res) {
    const id = req.params.id

    const receita = await Receita.findById(id).lean()

    //console.log(receita)

    res.render('receitas/detail', { receita })
  }

  static async removeReceita(req, res) {
    const id = req.params.id

    await Receita.deleteOne({ _id: id })

    res.redirect('/receitas')
  }

  static async editaReceita(req, res) {
    const id = req.params.id

    const receita = await Receita.findById(id).lean()

    res.render('receitas/edit', { receita })
  }

  static async editaReceitaPost(req, res) {
    const id = req.body.id; 

    const nome = req.body.nome
    const descricao = req.body.descricao
    const ingredientes = req.body.ingredientes

    if (req.file) {

      const imagem = req.file.filename
      var receita = { nome,  descricao, imagem, ingredientes }
    }
    else {
      var receita = { nome, descricao, ingredientes }
    }

    await Receita.updateOne({ _id: id }, receita)

    res.redirect('/receitas')
  }
}
