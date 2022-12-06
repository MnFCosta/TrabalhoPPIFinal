const express = require('express')
const router = express.Router()
const ReceitaController = require('../controllers/ReceitaController')
const Upload = require('../helpers/uploadReceita')

router.post('/edit', Upload.single('imagem'), ReceitaController.editaReceitaPost)
router.get('/', ReceitaController.mostrarReceitas)
router.get('/create', ReceitaController.criarReceita)
router.post('/create',Upload.single('imagem'), ReceitaController.criarReceitaPost)
router.get('/:id', ReceitaController.buscaReceita)
router.post('/remove/:id', ReceitaController.removeReceita)
router.get('/edit/:id', ReceitaController.editaReceita)

module.exports = router
