

const Endereco = require('./enderecoRoute');
const Produto = require('./produtoRoute');
const User = require('./userRoute')
const Login = require('./loginRoute')
const bodyParser = require('body-parser')
 

module.exports = app => {
  app.use(
    bodyParser.json(),
    User,
    Endereco,
    Produto,
    Login
   
  )
}