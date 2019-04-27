// Get the packages we need
var express = require('express'),
    path = require('path'),
    router = express.Router(),
    mongoose = require('mongoose'),
    secrets = require('./config/secrets'),
    bodyParser = require('body-parser'),
    events   = require('./routes/events'),
    users   = require('./routes/users');

// Create our Express application
var app = express();
app.use(express.static(path.join(__dirname, 'client/build')));

// Use environment defined port or 4000
var port = process.env.PORT || 4000;

// Connect to a MongoDB
mongoose.connect(secrets.mongo_connection,  { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected')
});


// Allow CORS so that backend and frontend could be put on different servers
var allowCrossDomain = function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next();
};
app.use(allowCrossDomain);

// Use the body-parser package in our application
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// An api endpoint that returns a short list of items
app.get('/api/test', (req,res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});

// Use routes as a module (see index.js)
app.use('/api/events',events);
app.use('/api/users',users);
require('./routes')(app, router);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'))
});

// Start the server
app.listen(port);

console.log('Server running on port ' + port);
