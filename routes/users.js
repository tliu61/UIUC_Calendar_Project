var express = require('express'),
    User = require('../models/user'),
    router = express.Router(),
    HttpStatus = require('http-status-codes'),
    bodyParser = require('body-parser'),
    passwordHash = require('password-hash');
mongoose = require('mongoose');

function checkBody(req) {
  if (typeof req.body.name === 'undefined') {
    throw 'Cannot run without name';
  }
  if (typeof req.body.email === 'undefined') {
    throw 'Cannot run without email';
  }
  if (typeof req.body.securityquestion === 'undefined') {
    throw 'Cannot run without security question';
  }
  if (typeof req.body.securityanswer === 'undefined') {
    throw 'Cannot run without security answer';
  }
  if (typeof req.body.password === 'undefined') {
    throw 'Cannot run without password';
  } else {
    req.body.password = passwordHash.generate(req.body.password);
  }
}

router.get('/', async (req, res) => {
  var where = eval('(' + req.query.where + ')') || {},
      sort = eval('(' + req.query.sort + ')') || {"dateCreated": 1},
      select = eval('(' + req.query.select + ')') || {},
      skip = eval('(' + req.query.skip + ')') || 0,
      limit = eval('(' + req.query.limit + ')') || 0,
      count = eval('(' + req.query.count + ')') || false;

  try {
    var ret = await User.find(where, select, {skip: skip, limit: limit, sort: sort}).exec();
    res.send({
      message: 'OK',
      data: ret
    });
  } catch (e) {
    res.status(404).send({
      message: e,
      data: []
    });
  }
});

router.post('/', async (req, res) => {
  try {
    checkBody(req);
    var oldUser = await User.find({email: req.body.email}).exec();
    if (oldUser.length) {
      throw 'User already exists';
    }
    var user = new User(req.body);
    var ret = await user.save();
    res.send({
      message: 'OK',
      data: ret
    });
  } catch (e) {
    res.status(404).send(e);
  }
});

<<<<<<< HEAD
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
=======
router.get('/:email/:password', async (req, res) => {
  try {
    res.send({
      message: 'TEST',
      email: email,
      pass: password
    });
  } catch (e) {
    res.status(404).send({
      message: 'ERROR',
      details: e
    });
  }
});

router.get('/:id', async (req, res) => {
  try {
    var user = await User.findById(req.params.id).exec();
    res.send({
      message: 'OK',
      data: user
    });
  } catch (e) {
    res.status(404).send(e);
  }
});
>>>>>>> d88a29dd0177b98b575f60a1b226394e91cb4db4

router.put('/:id', async (req, res) => {
  try {
    checkBody(req);
    var user = await User.findById(req.params.id).exec();
    user.set(request.body);
    var ret = await person.save();
    res.send({
      message: 'OK',
      data: ret
    });
  } catch (e) {
    res.status(404).send(e);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    var ret = await User.deleteOne({ _id: req.params.id}).exec();
    res.send({
      message: 'OK',
      data: ret
    });
  } catch (e) {
    res.status(404).send(e);
  }
});

module.exports = router;
