import mongoose from 'mongoose';
// import { Decimal128 } from 'mongoose';

mongoose.connect('mongodb://127.0.0.1/theFootballDB',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const playerSchema = mongoose.Schema({
    name: String,
    Nationality: String,
    DOB: Date,
    Height: Number,
    Appearances: Number,
    Goals: Number,
    Assists: Number,
    CleanSheets: Number
})

// export default mongoose.model('League', leagueSchema)
var PlayerModel = mongoose.model('Player',playerSchema);

let ozil = new PlayerModel({
    name: 'Mesut Özil',
    Nationality: 'Germany',
    DOB: "1988-10-15",
    Height: 180,
    Appearances: 184,
    Goals: 33,
    Assists: 54,
    CleanSheets: 0
});

ozil.save()
    .then(doc => {
        console.log(doc)
    })
    .catch(err => {
        console.error(err)
    })