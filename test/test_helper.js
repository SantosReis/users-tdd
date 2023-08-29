require('dotenv').config()
require('colors')

const mongoose = require('mongoose')
mongoose.Promise = global.Promise //Force ES6 Promise style

//Test only one time
before((done) => {
  mongoose.connect(process.env.MONGO_URI)
  mongoose.connection
    .once('open', () => {
      done()
    })
    .on('error', (error) => {
      console.warn('Warning', error)
    })
})

//Reset database statements request from tests (mockups)
beforeEach((done) => {
  mongoose.connection.collections.users.drop(() => {
    done()
  })
})
