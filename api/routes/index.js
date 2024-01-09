

const User = require('./userRoute');
const Endereco = require('./enderecoRoute');
const Produto = require('./produtoRoute');
const bodyParser = require('body-parser');
 

module.exports = app => {
  app.use(
    bodyParser.json(),
    User,
    Endereco,
    Produto
   
  )
}