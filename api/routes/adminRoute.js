const { Router } = require('express')
const AdminController = require('../controllers/AdminController')

const router = Router()

router
  .get('/admin', AdminController.pegaTodosOsAdmin)  
  .get('/admin/:id', AdminController.pegaAdmin)  
  .post('/admin', AdminController.criaAdmin)  
  .put('/admin/:id', AdminController.atualizaAdmin)  
  .delete('/admin/:id', AdminController.apagaAdmin)  
 

module.exports = router