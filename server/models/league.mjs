import mongoose from 'mongoose';
// import { Decimal128 } from 'mongoose';

mongoose.connect('mongodb://127.0.0.1/theFootballDB',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const leagueSchema = mongoose.Schema({
    name: String,
    aliasName: [String],
    abbreviation: String,
    firstSeason: Date,
    players: Number,
    foreignPlayers: Number,
    marketValue: Number,
    UEFACoeff: Number
})

// export default mongoose.model('League', leagueSchema)
var LeagueModel = mongoose.model('League',leagueSchema);

let epl = new LeagueModel({
    name: 'Premier League',
    aliasName: ['EPL', 'BPL', 'English Premier League'],
    abbreviation: 'PL',
    firstSeason: "1992-08-15",
    players: 514,
    foreignPlayers: 332,
    marketValue: 8660000000,
    UEFACoeff: 88.176
});

epl.save()
    .then(doc => {
        console.log(doc)
    })
    .catch(err => {
        console.error(err)
    })