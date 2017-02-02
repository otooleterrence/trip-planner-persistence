const router = require('express').Router();

const Hotel = require('../../models/hotel');
const Restaurant = require('../../models/restaurant');
const Activity = require('../../models/activity');
const Day = require('../../models/day');

router.get('/', function(req, res, next){
  // get all days
  Day.findAll()
  .then(function(days) {
    res.send(days)
  })
  .catch(next)
});

router.get('/:id', function(req, res, next){
  // get one day
  Day.findOne({where: {id: req.params.id}})
  .then(function(day) {
    if (!day) res.send('day does not exist')
    else res.send(day)
  })
  .catch(next)
});

router.delete('/:id', function(req, res, next){
  // delete one day
   Day.destroy({where: {id: req.params.id}})
  .then(function(statusCode) {
    if (statusCode) {
      res.send('deleted')
    } else {
      res.send('Sorry Dave, I can\'t let you do that')
    }
  })
  .catch(next)
});

router.post('/', function(req, res, next){
 // make a new day // will have to make sure we don't double post day.number
 Day.create( {number: req.body.number})
 .then(function(response) {
  res.send(response)
 })
 .catch(next) // nameVar will have to come from front end
});


router.post('/:id/hotels', function(req, res, next){
  // defining hotels for that day // body from form will have to send "hotel"
  Day.find({where: {id: req.params.id}})
  .then(function(day) {
    day.setHotel(req.body.hotel.value).then(function(updatedDay) {
      res.send(updatedDay)
    })
    .catch(next)
  })
});

router.delete('/:id/hotels', function(req, res, next){
  // removing current hotel from day
  Day.find({where: {id: req.params.id}})
  .then(function(day) {
    day.setHotel(null).then(function(updatedDay) {
      res.send(updatedDay)
    })
  })
  .catch(next)
});


router.post('/:id/restaurants', function(req, res, next){
  // add restaurant to that day
  Day.find({where: {id: req.params.id}})
  .then(function(day) {
    day.addRestaurant([req.body.value]).then(function(updatedDay) {
      res.send(updatedDay)
    })
  })
  .catch(next)
});

router.delete('/:id/restaurants', function(req, res, next){
  // removing restaurant from that
  Day.find({where: {id: req.params.id}})
  .then(function(day) {
    day.removeRestaurant(req.body.value)
    .then(function(statusCode) {
      if (statusCode) {
        res.send('deleted restaurant')
      } else {
        res.send('no restaurant to delete')
      }
    })
    .catch(next)
  })
});


router.post('/:id/activities', function(req, res, next){
  // add activity to that day
  Day.find({where: {id: req.params.id}})
  .then(function(day) {
    day.addActivity([req.body.value]).then(function(updatedDay) {
      res.send(updatedDay)
    })
  })
  .catch(next)
});

router.delete('/:id/activities', function(req, res, next){
  // remove activity from day
  Day.find({where: {id: req.params.id}})
  .then(function(day) {
    day.removeActivity(req.body.value)
    .then(function(statusCode) {
      if (statusCode) {
        res.send('deleted activity')
      } else {
        res.send('no activity to delete')
      }
    })
    .catch(next)
  })
});


module.exports = router;
