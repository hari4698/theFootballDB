import mongoose from 'mongoose';
// import { Decimal128 } from 'mongoose';

mongoose.connect('mongodb://127.0.0.1/theFootballDB',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const leagueSchema = mongoose.Schema({
    key: String,
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
    key:'pl',
    name: 'Premier League',
    aliasName: ['EPL', 'BPL', 'English Premier League'],
    abbreviation: 'PL',
    firstSeason: "1992-08-15",
    players: 514,
    foreignPlayers: 332,
    marketValue: 8660000000,
    UEFACoeff: 88.176
});

let laliga = new LeagueModel({
    key: 'laliga',
    name: 'LA Liga',
    aliasName: ['LALIGA', 'liga',],
    abbreviation: 'LALIGA',
    firstSeason: "1929-06-15",
    players: 486,
    foreignPlayers: 192,
    marketValue: 8660000000,
    UEFACoeff: 99.426
});

epl.save()
    .then(doc => {
        console.log(doc)
    })
    .catch(err => {
        console.error(err)
    })

laliga.save()
    .then(doc => {
        console.log(doc)
    })
    .catch(err => {
        console.error(err)
    })