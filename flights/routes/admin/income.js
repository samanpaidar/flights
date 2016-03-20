var express  = require('express');
var router   = express.Router();
var Flights  = require('../../schema/flightdescribe');
var mongodb  = require('mongodb');
/* GET home page. */
router.get('/income', function(req, res, next) {
  Flights.find( ).then(function(income) {
  			var obj = new Object();

  	res.render('./pages/income',{
  		income: income 
  		});
	});
});


router.post('/income', function(req, res, next) {

  		Flights.create({

			flightnumber: req.body.flightnumber,
			departure: req.body.departure,
			destination: req.body.destination,
			departs: req.body.departs,
			arrives: req.body.arrives,
			totalplace: req.body.totalplace,
			aircraft: req.body.aircraft,
	   	});

		console.log('sss');
		res.redirect('income');
	   	res.end();
	   	next();
});
/*router.post('./income',function(req,res){

});*/
module.exports = router;
