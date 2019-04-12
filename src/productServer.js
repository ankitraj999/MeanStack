const express=require('express')
const app=express()
const cors=require('cors')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
const PORT=5000
const config=require('./DB.js')
const ServerPort=require('./serverPort.js')
mongoose.connect(config.DB).then(
    ()=>{console.log('Database is connected')},
    err=>{console.log('cannot connect to database '+err)}
)
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use('/serverport',ServerPort)

app.listen(PORT, function(){
    console.log('Server is running on Port: ',PORT);
  });