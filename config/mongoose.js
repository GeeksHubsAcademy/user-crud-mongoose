const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mis-pruebas', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(() => console.log('conectado a mongoDB con éxito'))
    .catch(console.error)