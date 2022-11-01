const express = require('express')
const app = express()

//puerto
const port = process.env.PORT || 3000

app.get('/', function(req, res){
    res.json({mensaje: 'Hola'})
});

app.get('/choferes', function(req, res){
    res.json({mensaje: 'chau'})
});

app.post('/', function(req, res) {
    res.json({mensaje: "Post"})
});

app.delete('/', function(req, res) {
    res.json({mesaje: "delete"})
});

//inicio server

app.listen(port);
console.log('API oyendo')

