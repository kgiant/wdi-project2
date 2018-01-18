// const sessions = require('../models/sessions');
// const User = require('../models/user');
const Racer = require('../models/racer');
// const Event = require('../models/event');
// const Results = require('../models/result');
const Team = require('../models/team');
const News = require('../models/news');

//show listing of all racers
function racersRoute(req, res){
  Racer
    .find(req.query)
    .sort('fisRank')
    .exec()
    .then((racers) => {
      if(!racers) return res.status(404).end();
      News
        .find()
        .exec()
        .then((newsItems) => {
          res.render('statics/racers', {racers, newsItems});
        })
        .catch(() => {
          res.status(500).end();
        });
    })
    .catch(() => {
      res.status(500).end();
    });
}

// show registration form
function newRoute(req, res) {
  Racer
    .find()
    .exec()
    .then((racer) =>  res.render('racer/new', { racer }));
}

// show indivdual racer profile
function racerRoute(req, res) {
  Racer
    .findOne({name: req.params.name})
    .populate('team') // turn team id into team object with full details
    .populate('news')
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
  req.body.createdBy = req.user;
  console.log(req.body);
  Racer
    .create(req.body)
    .then((racer) => {
      console.log(req.body);
      req.flash('info', `You just added ${racer.name} in your team!.` );
      // res.redirect('/racers');
      res.redirect('/racers');
    })
    .catch((err) => {
      if(err.name ==='ValidationError'){
        return res.status(400).render('racer/new', {message: 'Passwords do not match'});
      }
      res.status(500).end();
    });
}

function editRoute(req, res) {
  Racer
    .findOne({name: req.params.name})
    .populate('team') // turn team id into team object with full details
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
      res.redirect(`/racers/${racer.name}`);
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
      res.redirect('/racers');
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

module.exports = {
  racers: racersRoute,
  racer: racerRoute,
  new: newRoute,
  create: createRoute,
  edit: editRoute,
  update: racerUpdate,
  delete: racerDelete
};
