

const User = require('./userRoute')
const bodyParser = require('body-parser')
 

module.exports = app => {
  app.use(
    bodyParser.json(),
    User
   
  )
}