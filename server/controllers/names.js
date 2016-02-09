var mongoose = require('mongoose');
var Name = mongoose.model('Name') 

module.exports = {
  start: function(req, res) {

    Name.find({}, function(err, names) {
      if(err){
          console.log("something wrong in finding all names");
        } else {
          console.log('got all names');
        }
      res.json({names: names}); 
    })
  },

  new_name: function(req, res) {
    console.log('In new_name');
    var name = new Name({name: req.params.name});
    console.log('here is the new name',name);
    name.save(function(err) {
      if(err) {
        console.log('something went wrong in saving name');
      } else { 
        console.log('successfully added a name!');
        res.redirect('/');
      }
    })
  },

  remove: function(req, res){
    Name.remove({name: req.params.name}, function(err, names) {
      if(err){
            console.log("something wrong in removing a name");
          } else {
            console.log('removed a name',names);
          }
      res.redirect('/');
      })
  },

  detail: function(req, res) {
    Name.findOne({name: req.params.name}, function(err, names) {
     if(err){
            console.log("something wrong in finding one name");
          } else {
            console.log('got one name',names);
          }
    res.json({names: names});
      })
  }
}