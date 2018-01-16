// const sessions = require('../models/sessions');
// const User = require('../models/user');
// const Racer = require('../models/racer');
const Event = require('../models/event');
// const Results = require('../models/result');
// const Team = require('../models/team');
// const News = require('../models/news');


function eventsRoute(req, res){
  Event
    .find(req.query)
    .exec()
    .then((events) => {
      if(!events) return res.status(404).end();
      res.render('statics/events', {events});
    })
    .catch(() => {
      res.status(500).end();
    });
}

function eventRoute(req, res) {
  Event
    .findOne({name: req.params.name})
    // .populate('team') // turn team id into team object with full details
    .exec()
    .then((event) => {
      if(!event) return res.status(404).end();
      res.render('event/profile', {event});
    })
    .catch(() => {
      res.status(500).end();
    });
}

// Render the registration form
function newRoute(req, res) {
  Event
    .find()
    .exec()
    .then((events) =>  res.render('event/new', { events }));
}

function createRoute(req, res){
  Event
    .create(req.body)
    .then((event) => {
      req.flash('info', `Thanks for registering, ${event.username}! Please login to manage team-${event.country}.` );
      res.redirect('/login');
    })
    .catch((err) => {
      if(err.name ==='ValidationError'){
        return res.status(400).render('registrations/new', {message: 'Passwords do not match'});
      }
      res.status(500).end();
    });
}

module.exports = {
  // index: indexRoute,
  // user: userRoute,
  // racer: racerRoute,
  // team: teamRoute,
  events: eventsRoute,
  event: eventRoute,
  new: newRoute,
  create: createRoute
  // result: resultRoute,
  // news: newsRoute,
};
