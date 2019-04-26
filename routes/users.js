var express = require('express'),
    User = require('../models/user'),
    router = express.Router(),
    HttpStatus = require('http-status-codes'),
    bodyParser = require('body-parser');

router.get('/:id',function(req,res){
	var id = req.params.id;
	User.findById(id,function(err,user){
		//console.log("Get users:",user);
		if(err){
			var json = JSON.stringify({
				"message": "Cannot get user",
				"data": user
			});
			res.status(HttpStatus.NOT_FOUND).send(json);
			return;
		}
		var json = JSON.stringify({
			"message": "OK",
			"data": user
		});
		res.status(HttpStatus.OK).send(json);

	})

})

router.use(bodyParser.json());

router.put("/:id",function(req,res){
	var query = {_id:req.params.id}
	var update = req.body;
	var options = {new:true};
	try{
		//console.log("Body:",req.body);
		if(typeof update.name === 'undefined'){
			throw "Cannot update a user without name";
		}
		if(typeof update.email === 'undefined'){
			throw "Cannot update a user without email";
		}
		User.update(query,update,options,function(err,user){
			if(err){
				var json = JSON.stringify({
					"message": "Cannot update user",
					"data": user
				});
				res.status(HttpStatus.NOT_FOUND).send(json);
				return;
			}
			var json = JSON.stringify({
				"message": "OK",
				"data": user
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

router.delete('/:user',function(req,res){
	//var options = {new:true};
	console.log("Remove user:",req.params.user);
	var query = {_id:req.params.user}
	result = User.deleteOne(query,function(err){
		//console.log("Remove user:",user);
		if(err){
			var json = JSON.stringify({
				"message": "Cannot delete user",
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
		//console.log(select);
		var skip =  req.query.skip;
		if(typeof skip!= 'undefined'){
			options["skip"] = JSON.parse(skip);
		}
		var limit =  req.query.limit;
		if(typeof limit!= 'undefined'){
			options["limit"] = JSON.parse(limit);
		}
		var count =  req.query.count;
		if(typeof count!= 'undefined'){
			options["count"] = JSON.parse(count);
		}
		const projection =  (typeof select === 'undefined') ? {}:JSON.parse(select);
		if(where._id==1){
			console.log("Find all users");
			User.find({},projection,options, function(err, users) {
				if(err){
					var json = JSON.stringify({
						"message": "Cannot find all users",
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
			User.find(eval(where),projection,options,function(err,users){
				//console.log("Get users:",users);
				if(err){
					var json = JSON.stringify({
						"message": "Cannot post user",
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
	try{
		//console.log("Body:",req.body);
		if(typeof req.body.name === 'undefined'){
			throw "Cannot create a user without name";
		}
		if(typeof req.body.email === 'undefined'){
			throw "Cannot create a user without email";
		}

		User.find({email:req.body.email},function(err,docs){
			try{
				if(docs.length){
					throw "Already exists a user with the same email";
				}
				var user = new User({name: req.body.name, email: req.body.email, dateCreated: new Date(),pendingTasks:[]});
				user.save().then(function(user){
					var json = JSON.stringify({
						"message": "OK",
						"data": user
					});
					res.status(HttpStatus.CREATED).send(json);
				}).catch(function(err){
					var json = JSON.stringify({
						"message": "Cannot post user",
						"data": user
					});
					res.status(HttpStatus.BAD_REQUEST).send(json);
				});
				}
			catch(e){
				var json = JSON.stringify({
					"message": e,
					"data": ""
				});
				res.status(HttpStatus.BAD_REQUEST).send(json);
				}
			});
		}
		catch(e){
			var json = JSON.stringify({
				"message": e,
				"data": ""
			});
			console.log("Error");
			res.status(HttpStatus.BAD_REQUEST).send(json);
		}
	//console.log("Post Users name:",req.body.name);
})

module.exports = router;
