const Imagem = require('../models/Imagem')
const mongoose = require('mongoose')


module.exports = class ImagemController {
  
  static async mostrarImagems(req, res) {
    const imagems = await Imagem.find({}).lean()

    //console.log(imagems)

    res.render('imagems/all', { imagems })
  }

  static criarImagem(req, res) {
    res.render('imagems/create')
  }

  static async criarImagemPost(req, res) {

    const nome = req.body.nome
    const resumo = req.body.resumo
    const descricao = req.body.descricao

    const imagem = req.file.filename
    const imagens = new Imagem({ nome, resumo, descricao, imagem })

    await imagens.save()

    res.redirect('/imagems')
  }

  static async buscaImagem(req, res) {
    const id = req.params.id

    const imagem = await Imagem.findById(id).lean()

    res.render('imagems/detail', { imagem })
  }

  static async removeImagem(req, res) {
    const id = req.params.id

    await Imagem.deleteOne({ _id: id })

    res.redirect('/imagems')
  }

  static async editaImagem(req, res) {
    const id = req.params.id

    const imagem = await Imagem.findById(id).lean()

    res.render('imagems/edit', { imagem })
  }

  static async editaImagemPost(req, res) {
    const id = req.body.id; 

    const nome = req.body.nome
    const resumo = req.body.resumo
    const descricao = req.body.descricao

    if (req.file) {

      const imagem = req.file.filename
      var imagens = { nome, resumo, descricao, imagem }
    }
    else {
      var imagens = { nome, resumo, descricao }
    }

    await Imagem.updateOne({ _id: id }, imagens)

    res.redirect('/imagems')
  }
}
