const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController')
const Upload = require('../helpers/uploadUser')

router.post('/edit', Upload.single('imagem'), UserController.editaUserPost)
router.get('/', UserController.mostrarUsers)
router.get('/create', UserController.criarUser)
router.post('/create',Upload.single('imagem'), UserController.criarUserPost)
router.get('/:id', UserController.buscaUser)
router.post('/remove/:id', UserController.removeUser)
router.get('/edit/:id', UserController.editaUser)

module.exports = router
