const { Router } = require('express')
const ProdutoController = require('../controllers/ProdutoController');

const router = Router()

router
  .get('/produto', ProdutoController.pegaTodosOsProduto)  
  .get('/produto/:id', ProdutoController.pegaProduto)  
  .post('/produto', ProdutoController.criaProduto)  
  .put('/produto/:id', ProdutoController.atualizaProduto)  
  .delete('/produto/:id', ProdutoController.apagaProduto)  
 
module.exports = router