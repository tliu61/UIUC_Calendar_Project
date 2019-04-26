// Load required packages
var mongoose = require('mongoose');

// Define our Event schema
var EventSchema = new mongoose.Schema({
    title:            { type: String,   required: true },
    date:             { type: Date,     required: true },
    creator:          { type: String,   required: true },
    email:            { type: String,   required: true },
    address:          { type: String,   required: true },
    introduction:     { type: String },
    coverpicture:     { type: String,   required: true },
    tags:             { type: [String], default: [] },

});

// Export the Mongoose model
module.exports = mongoose.model('Event', EventSchema);
