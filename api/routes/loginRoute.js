const { Router } = require('express')
const LoginController = require('../controllers/LoginController')
const authMiddleware = require('../middlewares/authMiddleware')
const router = Router()

router
    .get('/profile', LoginController.getProfile)
    .post('/login',authMiddleware, LoginController.verificaLogin)

module.exports = router
