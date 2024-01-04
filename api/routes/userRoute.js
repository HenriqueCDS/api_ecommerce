const { Router } = require('express')
const userController = require('../controllers/UserController');

const router = Router()

router
  .get('/user', userController.pegaTodosOsUser)  
  .get('/user/:id', userController.pegaUser)  
  .post('/user', userController.criaUser)  
  .put('/user/:id', userController.atualizaUser)  
  .delete('/user/:id', userController.apagaUser)  
 
module.exports = router