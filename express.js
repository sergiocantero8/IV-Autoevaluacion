var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.send({      
        "pistas" : [
        {
            "precio": "14 euros",
            "horario": "9:00-21:00",
            "ubicacion": "Polideportivo Armilla"
        },
        {
            "precio": "8 euros",
            "horario": "9:00-17:00",
            "ubicacion": "Cartuja"
        }
    ] });
});

app.listen(process.env.PORT || 5000);
console.log('Servidor en http://127.0.0.1:5000/');