const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://mohammedalkar24:alkarCR7@cluster0.hk4mt.mongodb.net/'

mongoose.connect(mongoURL , {useUnifiedTopology : true, useNewUrlParser:true})

var connection = mongoose.connection

connection.on('error', () =>{
    console.log('Mongo Connection failed')
})

connection.on('connected', () =>{
    console.log('Mongo Connection succesful')
})

module.exports = mongoose