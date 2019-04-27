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
    res.status(404).send({
      message: 'ERROR',
      data: e
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
    res.status(404).send({
      message: 'ERROR',
      data: e
    });
  }
});

router.put('/:id', async (req, res) => {
  try {
    var ret = await User.findOneAndUpdate({_id: req.params.id}, req.body).exec();
    var user = await User.findById(req.params.id).exec();
    res.send({
      message: 'OK',
      data: user
    });
  } catch (e) {
    res.status(404).send({
      message: 'ERROR',
      data: e
    });
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
    res.status(404).send({
      message: 'ERROR',
      data: e
    });
  }
});

// Psuedo User Authentication
router.get('/:id/password/:pass', async (req, res) => {
  try {
    console.log('Getting user with password authentication');
    var user = await User.findById(req.params.id).exec();
    if (passwordHash.verify(req.params.pass, user.password)) {
      res.send({
        message: 'OK',
        data: user
      });
    } else {
      res.status(401).send({
        message: 'Incorrect Password',
      });
    }
  } catch (e) {
    res.status(404).send({
      message: 'ERROR',
      data: e
    });
  }
});

router.get('/:id/security/:answer', async (req, res) => {
  try {
    console.log('Getting user with security question authentication');
    var user = await User.findById(req.params.id).exec();
    if (user.securityanswer == req.params.answer) {
      res.send({
        message: 'OK',
        data: user
      });
    } else {
      res.status(401).send({
        message: 'Incorrect security answer',
      });
    }
  } catch (e) {
    res.status(404).send({
      message: 'ERROR',
      data: e
    });
  }
});

// Custom event addition
router.put('/:email/create/:e_id', async (req, res) => {
  try {
    var user = await User.findOne({ email: req.params.email });
    user.createdevents.push(req.params.e_id);
    var ret = await user.save();
    res.send({
      message: 'OK',
      data: ret
    });
  } catch (e) {
    res.status(404).send({
      message: 'ERROR',
      data: e
    });
  }
});

router.put('/:email/save/:e_id', async (req, res) => {
  try {
    var user = await User.findOne({ email: req.params.email });
    user.savedevents.push(req.params.e_id);
    var ret = await user.save();
    res.send({
      message: 'OK',
      data: ret
    });
  } catch (e) {
    res.status(404).send({
      message: 'ERROR',
      data: e
    });
  }
});

module.exports = router;
