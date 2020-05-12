import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1/theFootballDB',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// let LeagueModel = require('/models/league')