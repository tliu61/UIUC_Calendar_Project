var express = require('express'),
    Event = require('../models/event'),
    router = express.Router(),
    HttpStatus = require('http-status-codes'),
    bodyParser = require('body-parser');

router.use(bodyParser.json());

router.get('/:id',function(req,res){
	var id = req.params.id;
	Event.findById(id,function(err,event){
		console.log("Get users:",event);
		if(err){
			var json = JSON.stringify({
				"message": "Cannot get the event",
				"data": event
			});
			res.status(HttpStatus.NOT_FOUND).send(json);
			return;
		}
		var json = JSON.stringify({
			"message": "OK",
			"data": event
		});
		res.status(HttpStatus.OK).send(json);

	})

})

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

	var event = new Event({title:body.title, email: body.email, date: body.date,creator: body.creator, address: body.address, introduction: body.introduction, coverpicture: body.coverpicture,tags:event.tags})

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
})

router.delete('/:id',function(req,res){
	//var options = {new:true};
	console.log("Remove event:",req.params.id);
	var query = {_id:req.params.id}
	result = Event.deleteOne(query,function(err){
		//console.log("Remove user:",user);
		if(err){
			var json = JSON.stringify({
				"message": "Cannot the delete event",
			});
			res.status(HttpStatus.NOT_FOUND).send(json);
			return;
		}
		var json = JSON.stringify({
			"message": "OK",
			"data": "Delete task with id " + req.params.id 
		});
		res.status(HttpStatus.OK).send(json);		
	})
	//console.log("User:=",JSON.stringify(result));
})

router.put("/:id",function(req,res){
	//console.log(req.url);
	var query = {_id:req.params.id}
	//console.log("Body:",req.body)
	var update = req.body;
	//console.log("Before Update users:",update);
	var options = {new:true};

	Event.update(query,update,options,function(err,event){
		//console.log("Update users:",user);
		if(err){
			var json = JSON.stringify({
				"message": "Cannot update event",
				"data": event
			});
			res.status(HttpStatus.NOT_FOUND).send(json);
			return;
		}
		var json = JSON.stringify({
			"message": "OK",
			"data": "Update success"
		});
		res.status(HttpStatus.OK).send(json);		
	})

})




module.exports = router;
