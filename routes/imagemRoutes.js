const express = require('express')
const router = express.Router()
const ImagemController = require('../controllers/ImagemController')
const Upload = require('../helpers/uploadImagem')

router.post('/edit', Upload.single('imagem'), ImagemController.editaImagemPost)
router.get('/', ImagemController.mostrarImagems)
router.get('/create', ImagemController.criarImagem)
router.post('/create',Upload.single('imagem'), ImagemController.criarImagemPost)
router.get('/:id', ImagemController.buscaImagem)
router.post('/remove/:id', ImagemController.removeImagem)
router.get('/edit/:id', ImagemController.editaImagem)

module.exports = router
