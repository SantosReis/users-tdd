require('dotenv').config()
require('colors')

const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI)
mongoose.connection
  .once('open', () => console.log('Good to go!'))
  .on('error', (error) => {
    console.warn('Warning', error)
  })
