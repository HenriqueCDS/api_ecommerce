const { Router } = require('express')
const userController = require('../controllers/UserController');

const router = Router()

router
  .get('/users', userController.pegaTodosOsUser)  
  .get('/users/:id', userController.pegaUser)  
  .post('/users', userController.criaUser)  
  .put('/users/:id', userController.atualizaUser)  
  .delete('/users/:id', userController.apagaUser)  
 
module.exports = router