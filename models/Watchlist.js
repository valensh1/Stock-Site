const { Schema, model } = require('mongoose');

// create our schema
const stockSchema = new Schema({
	symbol: String,
	lastPrice: Number
});

const Watchlist = model('Watchlist', stockSchema);

module.exports = Watchlist;