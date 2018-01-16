// const sessions = require('../models/sessions');
// const User = require('../models/user');
const Racer = require('../models/racer');
// const Event = require('../models/event');
// const Results = require('../models/result');
const Team = require('../models/team');
// const News = require('../models/news');

function racersRoute(req, res){
  Racer
    .find(req.query)
    .exec()
    .then((racers) => {
      if(!racers) return res.status(404).end();
      res.render('statics/racers', {racers});
    })
    .catch(() => {
      res.status(500).end();
    });
}

function racerRoute(req, res) {
  Racer
    .findOne({name: req.params.name})
    .populate('team') // turn team id into team object with full details
    .exec()
    .then((racer) => {
      if(!racer) return res.status(404).end();
      res.render('racer/profile', {racer});
    })
    .catch(() => {
      res.status(500).end();
    });
}


// Render the registration form
function newRoute(req, res) {
  Team
    .find()
    .exec()
    .then((teams) =>  res.render('racer/new', { teams }));
}

function createRoute(req, res){
  Racer
    .create(req.body)
    .then((racer) => {
      req.flash('info', `Thanks for registering, ${racer.username}! Please login to manage team-${racer.country}.` );
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
  racers: racersRoute,
  racer: racerRoute,
  new: newRoute,
  create: createRoute
  // team: teamRoute,
  // event: eventRoute,
  // result: resultRoute,
  // news: newsRoute,
};
