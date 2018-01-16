// const sessions = require('../models/sessions');
// const User = require('../models/user');
// const Racer = require('../models/racer');
// const Event = require('../models/event');
// const Results = require('../models/result');
const Team = require('../models/team');
// const News = require('../models/news');



function teamsRoute(req, res){
  Team
    .find()
    .exec()
    .then((teams) => {
      if(!teams) return res.status(404).end();
      res.render('statics/teams', {teams});
    })
    .catch(() => {
      res.status(500).end();
    });
}

function newRoute(req, res) {
  Team
    .find()
    .exec()
    .then((team) =>  res.render('team/new', { team }));
}
function teamRoute(req, res) {
  Team
    .findOne({name: req.params.name})
    .exec()
    .then((team) => {
      if(!team) return res.status(404).end();
      res.render('team/profile', {team});
    })
    .catch(() => {
      res.status(500).end();
    });
}



// create new record
function createRoute(req, res){
  Team
    .create(req.body)
    .then((team) => {
      // req.flash('info', `Thanks for registering, ${team.username}! Please login to manage team-${team.country}.` );
      res.redirect('/teams');
      // res.redirect('/login');
    })
    .catch((err) => {
      if(err.name ==='ValidationError'){
        return res.status(400).render('team/new', {message: 'Passwords do not match'});
      }
      res.status(500).end();
    });
}

function editRoute(req, res) {
  Team
    .findOne({name: req.params.name})
    // .populate('team') // turn team id into team object with full details
    .exec()
    .then((team) => {
      if(!team) return res.status(404).end();
      res.render('team/edit', {team});
    })
    .catch(() => {
      res.status(500).end();
    });
}

function teamUpdate(req, res) {
  Team
    .findById(req.params.name)
    .exec()
    .then((team) => {
      if(!team) return res.status(404).send('Not found');

      team = Object.assign(team, req.body);

      return team.save();
    })
    .then((team) => {
      res.redirect('/teams');
      // res.redirect(`/teams/${team.name}`);
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

function teamDelete(req, res) {
  Team
    .findById(req.params.name)
    .exec()
    .then((team) => {
      if(!team) return res.status(404).send('Not found');
      return team.remove();
    })
    .then(() => {
      res.redirect('/teams');
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

module.exports = {
  // index: indexRoute,
  // user: userRoute,
  // racer: racerRoute,
  teams: teamsRoute,
  team: teamRoute,
  new: newRoute,
  create: createRoute,
  edit: editRoute,
  update: teamUpdate,
  delete: teamDelete
  // event: eventRoute,
  // result: resultRoute,
  // news: newsRoute,
};
