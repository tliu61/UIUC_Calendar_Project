// Load required packages
var mongoose = require('mongoose');

// Define our user schema
var UserSchema = new mongoose.Schema({
    name:             { type: String,   required: true },
    email:            { type: String,   required: true },
    password:         { type: String,   required: true },
    securityquestion: { type: String,   required: true },
    securityanswer:   { type: String,   required: true },
    createdevents:    { type: [String], default: [] },
    savedevents:      { type: [String], default: [] },

});

// Export the Mongoose model
module.exports = mongoose.model('User', UserSchema);
