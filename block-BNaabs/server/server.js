var express = require('express')
var logger = require('morgan')
var app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static(__dirname+"/public"))
app.use(logger('dev'))
app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/index.html")
})
app.get('/new', (req,res)=>{
    res.sendFile(__dirname + "/new.html")
})
app.get('/users/:username',(req,res)=>{
    var username = req.params.username
    console.log(username)
    res.send(username)
})
app.post('/new', (req,res)=>{
    console.log(req.body)
    res.json(req.body)
})

app.listen(3000, ()=>{
    console.log('listening to port 3000')
})












