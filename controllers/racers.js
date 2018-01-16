// const sessions = require('../models/sessions');
// const User = require('../models/user');
const Racer = require('../models/racer');
// const Event = require('../models/event');
// const Results = require('../models/result');
const Team = require('../models/team');
// const News = require('../models/news');

//show listing of all racers
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

// show registration form
function newRoute(req, res) {
  Team
    .find()
    .exec()
    .then((teams) =>  res.render('racer/new', { teams }));
}

// show indivdual racer profile
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

// create new record
function createRoute(req, res){
  Racer
    .create(req.body)
    .then((racer) => {
      req.flash('info', `Thanks for registering, ${racer.username}! Please login to manage team-${racer.country}.` );
      res.redirect('statics/racers');
      // res.redirect('/login');
    })
    .catch((err) => {
      if(err.name ==='ValidationError'){
        return res.status(400).render('registrations/new', {message: 'Passwords do not match'});
      }
      res.status(500).end();
    });
}

function editRoute(req, res) {
  Racer
    .findOne({name: req.params.name})
    // .populate('team') // turn team id into team object with full details
    .exec()
    .then((racer) => {
      if(!racer) return res.status(404).end();
      res.render('racer/edit', {racer});
    })
    .catch(() => {
      res.status(500).end();
    });
}

function racerUpdate(req, res) {
  Racer
    .findById(req.params.name)
    .exec()
    .then((racer) => {
      if(!racer) return res.status(404).send('Not found');

      racer = Object.assign(racer, req.body);

      return racer.save();
    })
    .then((racer) => {
      res.redirect(`statics/racers/${racer.name}`);
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

function racerDelete(req, res) {
  Racer
    .findById(req.params.name)
    .exec()
    .then((racer) => {
      if(!racer) return res.status(404).send('Not found');

      return racer.remove();
    })
    .then(() => {
      res.redirect('statics/racers');
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

module.exports = {
  // index: indexRoute,
  // user: userRoute,
  racers: racersRoute,
  racer: racerRoute,
  new: newRoute,
  create: createRoute,
  edit: editRoute,
  update: racerUpdate,
  delete: racerDelete
  // team: teamRoute,
  // event: eventRoute,
  // result: resultRoute,
  // news: newsRoute,
};
