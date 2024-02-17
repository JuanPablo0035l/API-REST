const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const postRoute = require('./routes/post');
app.use('/servicios', postRoute);

app.get ('/', (req, res) => {
    res.send('prueba1 respuesta del servidor');
} );

mongoose.connect('mongodb+srv://JuanBlanquicett:kqzCUBNRbcNBO4WW@cluster0.tto5i6t.mongodb.net/?retryWrites=true&w=majority', {

})

.then(() => {
    console.log('Conectado a la base de datos');
})

.catch(err => {
    console.error('Error al conectar la base de datos', err);
})


app.listen(10000); 