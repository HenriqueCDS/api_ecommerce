const { Router } = require('express')
const userController = require('../controllers/UserController');

const router = Router()

router
  .get('/usuarios', userController.pegaTodosOsUser)  
  .get('/usuarios/:id', userController.pegaUser)  
  .post('/usuarios', userController.criaUser)  
  .put('/usuarios/:id', userController.atualizaUser)  
  .delete('/usuarios/:id', userController.apagaUser)  
 
module.exports = router