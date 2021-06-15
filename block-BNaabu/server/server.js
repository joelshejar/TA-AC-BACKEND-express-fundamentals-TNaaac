var express = require('express')
var app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use((req, res, next) => {
    // if requested url is /admin throw error
    if (req.url === "admin") {
      return next("Unauthorized");
    }
    // other let it pass to next middleware by simply calling next()
    next();
  });
 
app.get('/',(req,res)=>{
    res.send('Hey Bruh')
})
app.get('/about',(req,res)=>{
    res.send('Hey Bruh, wassup')
})
app.use((req,res,next)=>{
    res.status(500).send('Page not found')
    next()
}) 
app.use((err,req,res,next)=>{
    res.send(err)
})
app.listen(3000, ()=>{
    console.log('listening to port 3000')
})















