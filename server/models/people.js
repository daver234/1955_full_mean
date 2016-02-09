var mongoose = require('mongoose');
var PeopleSchema = new mongoose.Schema({
 name: String,
 created_at: { type: Date, default: Date.now }
});
mongoose.model('People', PeopleSchema); 


