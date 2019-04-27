var express = require('express'),
    Event = require('../models/event'),
    router = express.Router(),
    HttpStatus = require('http-status-codes'),
    bodyParser = require('body-parser');

router.use(bodyParser.json());

router.get('',function(req,res){
	Event.find({}, function(err, events) {
		if(err){
			var json = JSON.stringify({
				"message": "Cannot find all events",
				"data": events
			});
			res.status(HttpStatus.NOT_FOUND).send(json);
			return;
		}
		var json = JSON.stringify({
			"message": "OK",
			"data": events
		});
		res.status(HttpStatus.OK).send(json);
  });
})

router.post('',function(req,res){
	var body = req.body;

	var event = new Event({title:body.title, email: body.email, date: body.date,creator: body.creator, address: body.address, introduction: body.introduction, coverpicture: body.coverpicture})

	event.save().then(function(event){
		var json = JSON.stringify({
			"message": "OK",
			"data": event
		});
		res.status(HttpStatus.CREATED).send(json);
	}).catch(function(err){
		var json = JSON.stringify({
			"message": "Cannot post event",
			"data": err
		});
		res.status(HttpStatus.BAD_REQUEST).send(json);
	});

	//console.log("Post Task name:",req.body.name);
})



module.exports = router;
