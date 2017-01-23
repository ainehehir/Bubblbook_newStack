const express = require('express');
const router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://newOrder:haloRemix@ds019986.mlab.com:19986/tuttifrutti'); // connect to our database
var Activity=require('../../models/activity');


/* GET api listing. */
router.get('/', (req, res) => {
  res.send('');
});



router.use(function(req, res, next) {
  // do logging
  console.log('Something is happening.');
  next();
});



// Create a new route with the prefix /beers
var activitiesRoute = router.route('/activities');

// Create endpoint /api/activities for POSTS
activitiesRoute.post(function(req, res) {
  // Create a new instance of the Activity model
  var activity = new Activity();

  // Set the properties that came from the POST data
  activity.name = req.body.name;
  activity.venue = req.body.venue;
  activity.date = req.body.date;
  activity.time = req.body.time;
  activity.isPrivate = req.body.isPrivate;
  activity.price = req.body.price;
  activity.category = req.body.category;
  // Save and check for errors
  activity.save(function(err) {
    if (err)
      res.send(err);
    res.json({ message: 'Stuff added to the locker!', data: activity });
  });
});

// Create endpoint /api/activities for GET
activitiesRoute.get(function(req, res) {
  // Use the Activity model to find all activity
  Activity.find(function(err, activities) {
    if (err)
      res.send(err);
    res.json(activities);
  });
});
  



// module.exports = Route;
module.exports = router;