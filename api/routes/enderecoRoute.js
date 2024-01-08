const { Router } = require('express')
const EnderecoController = require('../controllers/EnderecoController');

const router = Router()

router
  .get('/enderecos', EnderecoController.pegaTodosOsEnderecos)  
  .get('/enderecos/:id', EnderecoController.pegaEndereco)  
  .post('/enderecos', EnderecoController.criaEndereco)  
  .put('/enderecos/:id', EnderecoController.atualizaEndereco)  
  .delete('/enderecos/:id', EnderecoController.apagaEndereco)  
 
module.exports = router