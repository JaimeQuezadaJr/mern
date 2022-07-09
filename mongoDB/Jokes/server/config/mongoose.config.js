const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost/jokes';

mongoose.connect(mongoURI)
    .then(() => console.log('Connected to the db'))
    .catch(err => console.log('Something went wrong when connecting to db', err));