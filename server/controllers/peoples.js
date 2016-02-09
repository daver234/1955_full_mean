var mongoose = require('mongoose');
var People = mongoose.model('People') 

module.exports = (function() {
  return {
  start: function(req, res) {
    console.log('in start:');
    People.find({}, function(err, peoples) {
      if(err){
          console.log("something wrong in finding all peoples");
        } else {
          console.log('got all peoples');
        }
      res.json(peoples); 
    })
  },

  new_people: function(req, res) {
    console.log('In new_people');
    var people = new People({name: req.body.name});
    console.log('here is the new people',people);
    people.save(function(err) {
      if(err) {
        console.log('something went wrong in saving people');
      } else { 
        console.log('successfully added a people!');
        res.end();
      }
    })
  },

  remove: function(req, res){
    console.log('in remove: function in peoples.js', req.body._id);
    //People.find({req.body._id}).remove( callback);
    People.remove({_id: req.body._id}, function(err, peoples) {
      if(err){
            console.log("something wrong in removing a people");
          } else {
            console.log('removed a people',peoples);
          }
      res.end();
      })
  },

  detail: function(req, res) {
    People.findOne({name: req.params.name}, function(err, peoples) {
     if(err){
            console.log("something wrong in finding one people");
          } else {
            console.log('got one people',peoples);
          }
    rres.end();
      })
  }
}
}) ();