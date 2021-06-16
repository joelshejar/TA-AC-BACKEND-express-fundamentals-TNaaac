var express = require('express')
var app = express()
var logger = require('morgan')
var cookieParser = require('cookie-parser')
app.use(express.json())
app.use(express.urlencoded())
app.use(logger('dev'))
app.use(cookieParser())
app.use(express.static(__dirname))
app.use((req,res,next)=>{
    res.cookie("count", 1)
    next()
})
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})
app.get('/about',(req,res)=>{
    res.sendFile(__dirname+'/about.html')
})
app.use((err,req,res,next)=>{
    res.status(500).send(err)
    next()
})
app.listen(4000,()=>{
    console.log('server listening to port 4000')
})