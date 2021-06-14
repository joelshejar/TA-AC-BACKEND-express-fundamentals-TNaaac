var express = require('express')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var app = express()
app.use(logger('dev'))
app.use(cookieParser())
app.use('/about',(req,res,next)=>{
    console.log(req.cookies)
    res.cookie("username", "j@gmail.com")
    next()
})
app.get('/about',(req,res)=>{
    res.send('Welcome')
})
app.listen(3000, ()=>{
    console.log('server is listening to port 3000')
})










