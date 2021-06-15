var express = require('express')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var app = express()
app.use(logger('dev'))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded())
app.get('/users/:username',(req,res)=>{
    var username = req.params.username
    res.setHeader('Content-type','text/html')
    res.send(Buffer.from(`<h2>${username}</h2>`));
})
app.get('/',(req,res)=>{
    res.setHeader('Content-type','text/html')
    res.send(Buffer.from('<h2>Welcome to Express</h2>'));
})
app.get('/about',(req,res)=>{
    res.send('My name is qwerty')
})
app.get('/form',(req,res)=>{
    res.sendFile(__dirname+'/form.html')
})
app.post('/form',(req,res)=>{
    res.send(req.body)
})
app.use((req,res,next)=>{
    res.send('Route not handled')
})
app.use((err,req,res,next)=>{
    res.status(500).send('client/server error')
})
app.listen(3000,()=>{
    console.log('server listening to port 3000')
})