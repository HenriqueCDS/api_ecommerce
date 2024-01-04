const { Router } = require('express')
const RegisterController = require('../controllers/RegisterController')

const router = Router()

router
  .get('/register', RegisterController.pegaTodosOsRegister)  
  .get('/register/:id', RegisterController.pegaRegister)  
  .post('/register', RegisterController.criaRegister)  
  .put('/register/:id', RegisterController.atualizaRegister)  
  .delete('/register/:id', RegisterController.apagaRegister)  
 
module.exports = router