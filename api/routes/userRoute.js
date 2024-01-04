const { Router } = require('express')
const userController = require('../controllers/UserController');

const router = Router()

router
  .get('/Usuarios', userController.pegaTodosOsUser)  
  .get('/Usuarios/:id', userController.pegaUser)  
  .post('/Usuarios', userController.criaUser)  
  .put('/Usuarios/:id', userController.atualizaUser)  
  .delete('/Usuarios/:id', userController.apagaUser)  
 
module.exports = router