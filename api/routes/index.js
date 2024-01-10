

<<<<<<< Updated upstream
const User = require('./userRoute');
const Endereco = require('./enderecoRoute');
const Produto = require('./produtoRoute');
const bodyParser = require('body-parser');
=======
const User = require('./userRoute')
const Login = require('./loginRoute')
const bodyParser = require('body-parser')
>>>>>>> Stashed changes
 

module.exports = app => {
  app.use(
    bodyParser.json(),
    User,
<<<<<<< Updated upstream
    Endereco,
    Produto
=======
    Login
>>>>>>> Stashed changes
   
  )
}