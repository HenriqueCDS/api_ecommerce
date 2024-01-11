const { Router } = require('express')
const LoginController = require('../controllers/LoginController')
const authMiddleware = require('../middlewares/AuthMiddleware')
const router = Router()

router
    .get('/profile',authMiddleware.autentifica, LoginController.getProfile)
    .post('/login', LoginController.verificaLogin)

module.exports = router
