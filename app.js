//1.-Requerir librerías y drivers
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const MongoDBUrl = require('./keys');
const TourController = require('./controllers/admin');

const basicauth = require('./basicauth');
var auth = basicauth.auth;

//2.-Configurar web server y parsee los datos
const app = express();
//const port = 3000;
var port = process.env.PORT || 3000;
app.use(bodyParser.json());

//3.- Definir paths disponibles
app.get('/', (req, res) => {res.send('Mongo Express.... Please use /api/tours');});
app.get('/api/tours', auth, TourController.inq);
app.get('/api/tours/:id', auth, TourController.inqId);
app.get('/api/tours/names/:name', auth, TourController.inqByName);
app.post('/api/tours', auth, TourController.add);
app.delete('/api/tours/:id', auth, TourController.delete);

//4.- Encender webserver y dbserver
app.listen(port, () => {
    console.log('Server Inicializado en el puerto: ' + port);
    mongoose.connect(MongoDBUrl.conn, { useNewUrlParser: true })
        .then(() => {
            console.log('Server mongodb Conectado...')
        }, err => { console.log(err) });
});