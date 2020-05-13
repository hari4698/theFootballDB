import mongoose from 'mongoose';
// import { Decimal128 } from 'mongoose';

mongoose.connect('mongodb://127.0.0.1/theFootballDB',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const teamSchema = mongoose.Schema({
    name: String,
    Stadium: String,
    MatchesPlayed: Number,
    Wins: Number,
    Losses: Number,
    Goals: Number,
    GoalsConceded: Number,
    CleanSheets: Number
})

// export default mongoose.model('League', leagueSchema)
var TeamModel = mongoose.model('Team', teamSchema);

let arsenal = new TeamModel({
    name: 'Arsenal Football Club',
    Stadium: 'Emirates Stadium',
    MatchesPlayed: 1066,
    Wins: 574,
    Losses: 219,
    Goals: 1885,
    GoalsConceded: 1049,
    CleanSheets: 408
});

arsenal.save()
    .then(doc => {
        console.log(doc)
    })
    .catch(err => {
        console.error(err)
    })