var express = require('express'),
    Task = require('../models/task'),
    router = express.Router(),
    HttpStatus = require('http-status-codes'),
    bodyParser = require('body-parser');

router.get('/:id',function(req,res){
	var id = req.params.id;
	Task.findById(id,function(err,task){
		//console.log("Get users:",task);
		if(err){
			var json = JSON.stringify({
				"message": "Cannot get task",
				"data": task
			});
			res.status(HttpStatus.NOT_FOUND).send(json);
			return;
		}
		var json = JSON.stringify({
			"message": "OK",
			"data": task
		});
		res.status(HttpStatus.OK).send(json);

	})

})

router.use(bodyParser.json());

router.put("/:id",function(req,res){
	//console.log(req.url);
	var query = {_id:req.params.id}
	//console.log("Body:",req.body)
	var update = req.body;
	//console.log("Before Update users:",update);
	var options = {new:true};
	try{
		if(typeof body.name === 'undefined'){
			throw "Cannot create a task without name";
		}
		if(typeof body.deadline === 'undefined'){
			throw "Cannot create a task without deadline";
		}
			Task.update(query,update,options,function(err,task){
				//console.log("Update users:",user);
				if(err){
					var json = JSON.stringify({
						"message": "Cannot update task",
						"data": task
					});
					res.status(HttpStatus.NOT_FOUND).send(json);
					return;
				}
				var json = JSON.stringify({
					"message": "OK",
					"data": task
				});
				res.status(HttpStatus.OK).send(json);		
			})
	}
	catch(e){
		var json = JSON.stringify({
			"message": e,
			"data": ""
		});
		console.log("Error");
		res.status(HttpStatus.BAD_REQUEST).send(json);
	}
})

router.delete('/:task',function(req,res){
	//var options = {new:true};
	console.log("Remove task:",req.params.task);
	var query = {_id:req.params.task}
	result = Task.deleteOne(query,function(err){
		//console.log("Remove user:",user);
		if(err){
			var json = JSON.stringify({
				"message": "Cannot delete task",
			});
			res.status(HttpStatus.NOT_FOUND).send(json);
			return;
		}
		var json = JSON.stringify({
			"message": "OK",
		});
		res.status(HttpStatus.OK).send(json);		
	})
	//console.log("User:=",JSON.stringify(result));
})

router.get('',function(req,res){
	try{
		var where = req.query.where;
		where = (typeof where == 'undefined') ? {}:JSON.parse(where);
		var options = {};
		/*********************Start: Validate Sort******************************/
		var sort =  req.query.sort;
		if(typeof sort!= 'undefined'){
			var result = {};
			if(Array.isArray(sort)){
				for(var s in sort){
					//console.log("S:",sort[s]);
					result = {...result,...JSON.parse(sort[s])};
				}
				if(Object.keys(result).length!=1){
					throw "Cannot sort by more than one critiria";
				}
			}
			else {
				result = JSON.parse(sort);
			}
			options["sort"] = result;
		}
		/*********************End: Validate Sort******************************/
		var select = req.query.select;
		console.log(select);
		var skip =  req.query.skip;
		if(typeof skip!= 'undefined'){
			options["skip"] = JSON.parse(skip);
		}
		var limit =  req.query.limit;
		if(typeof limit!= 'undefined'){
			options["limit"] = JSON.parse(limit);
		}
		var count =  req.query.count;
		if(typeof skip!= 'undefined'){
			options["skip"] = JSON.parse(count);
		}
		const projection =  (typeof select === 'undefined') ? {}:JSON.parse(select);
		if(where._id==1){
			console.log("Find all users");
			Task.find({},projection,options, function(err, users) {
				if(err){
					var json = JSON.stringify({
						"message": "Cannot find all tasks",
						"data": users
					});
					res.status(HttpStatus.NOT_FOUND).send(json);
					return;
				}
				var json = JSON.stringify({
					"message": "OK",
					"data": users
				});
				res.status(HttpStatus.OK).send(json);
		  });
		}
		else{
			Task.find(eval(where),projection,options,function(err,tasks){
				//console.log("Get users:",users);
				if(err){
					var json = JSON.stringify({
						"message": "Cannot post task",
						"data": tasks
					});
					res.status(HttpStatus.NOT_FOUND).send(json);
					return;
				}
				var json = JSON.stringify({
					"message": "OK",
					"data": tasks
				});
				res.status(HttpStatus.OK).send(json);
			});
		}


	}catch(e){
		var json = JSON.stringify({
			"message": e,
			"data": ""
		});
		console.log("Error");
		res.status(HttpStatus.BAD_REQUEST).send(json);
	}
})

router.post('',function(req,res){
	var body = req.body;
	try{
		if(typeof body.name === 'undefined'){
			throw "Cannot create a task without name";
		}
		if(typeof body.deadline === 'undefined'){
			throw "Cannot create a task without deadline";
		}
		var task = new Task({name: body.name, deadline: body.deadline, assignedUserName: body.assignedUserName, assignedUser: body.assignedUserID, completed: body.completed, description: body.description, dateCreated: new Date()});
		task.save().then(function(task){
			var json = JSON.stringify({
				"message": "OK",
				"data": task
			});
			res.status(HttpStatus.CREATED).send(json);
		}).catch(function(err){
			var json = JSON.stringify({
				"message": "Cannot post user",
				"data": task
			});
			res.status(HttpStatus.BAD_REQUEST).send(json);
		});
	}catch(e){
		var json = JSON.stringify({
			"message": e,
			"data": ""
		});
		//console.log("Error:",e);
		res.status(HttpStatus.BAD_REQUEST).send(json);
	}

	//console.log("Post Task name:",req.body.name);
})


module.exports = router;