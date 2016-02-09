var peoples = require('../controllers/peoples.js');

module.exports = function(app) {
	console.log('in module exports')
  	app.get('/getPeoples', function(req, res) {
  		peoples.start(req, res);
  	});
  
  app.post('/addPeople', function(req, res) {
    	console.log('in routes.js /addPeople');
    	peoples.new_people(req, res);
    });

  app.post('/removePeople', function(req, res) {
    	peoples.remove(req, res);
    });
  
};