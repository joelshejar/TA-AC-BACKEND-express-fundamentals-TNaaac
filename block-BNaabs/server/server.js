var express = require('express')

var app = express()

app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/index.html")
})
app.get('/new', (req,res)=>{
    res.sendFile(__dirname + "/new.html")
})
app.get('/users:username',(req,res)=>{
    var username = req.params.username
    console.log(username)
    res.json(username)
    res.end()
})
// app.post('/new', (req,res)=>{

// })

app.listen(3000, ()=>{
    console.log('listening to port 3000')
})












