var express = require('express')

var app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use((req, res, next) => {
    let store ='';
    req.on('data', (chunk) => {
        store += chunk;
    });
    req.on('end', () => {
        req.body = JSON.parse(store);
        console.log(req.body);
        res.send(JSON.stringify(req.body));
    });
    next();
});

//clone of express.static()
app.use((req, res, next) => {
    path =__dirname + '/public' + req.url;
    console.log(path);
    res.sendFile(path);
});
app.listen(3000,()=>{
    console.log('server is listening to port 3000')
})


















