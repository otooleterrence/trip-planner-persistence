const router = require('express').Router();

const Hotel = require('../../models/hotel');
const Restaurant = require('../../models/restaurant');
const Activity = require('../../models/activity');
const Day = require('../../models/day');

router.get('/', function(req, res, next){
  // get all days
  console.log('derp')
});

router.get('/:id', function(req, res, next){
  // get one day
  console.log('derp')
});

router.delete('/:id', function(req, res, next){
  // delete one day
  console.log('derp')
});

router.post('/', function(req, res, next){
 // make a new day
 console.log('derp')
});


router.post('/:id/hotels', function(req, res, next){
  // defining hotels for that day
  console.log('derp')
});

router.delete('/:id/hotels', function(req, res, next){
  // removing current hotel from day
  console.log('derp')
});


router.post('/:id/restaurants', function(req, res, next){
  // add restaurant to that day
  console.log('derp')
});

router.delete('/:id/restaurants', function(req, res, next){
  // removing restaurant from that
  console.log('derp')
});


router.post('/:id/activities', function(req, res, next){
  // add activity to that day
  console.log('derp')
});

router.delete('/:id/activities', function(req, res, next){
  // remove activity from day
  console.log('derp')
});


module.exports = router;
