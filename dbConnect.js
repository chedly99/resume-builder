const mongoose = require('mongoose')

const URL = 'mongodb+srv://chdleee:rubenstynexx1212@cluster0.4w7uo.mongodb.net/resumebuilder'

mongoose.connect(URL , {useUnifiedTopology:true , useNewUrlParser:true})

const connection = mongoose.connection

connection.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull')
})
connection.on('error' , (error)=>{
    console.log(error)
})