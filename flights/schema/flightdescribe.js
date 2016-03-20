var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var flightSchema = new Schema({

	flightnumber: Number,
	departure: String,
	destination: String,
	departs: String,
	arrives: String,
	totalplace: Number,
	aircraft: String

});

var Flights = mongoose.model('Flights', flightSchema);

module.exports = Flights;
