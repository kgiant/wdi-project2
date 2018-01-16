// const sessions = require('../models/sessions');
const User = require('../models/user');
// const Racer = require('../models/racer');
// const Event = require('../models/event');
// const Results = require('../models/result');
// const Team = require('../models/team');
// const News = require('../models/news');



// function userRoute(req, res){
//   res.render('statics/users');
// }

function usersRoute(req, res){
  User
    .find(req.query)
    .exec()
    .then((users) => {
      if(!users) return res.status(404).end();
      res.render('statics/users', {users});
    })
    .catch(() => {
      res.status(500).end();
    });
}

function userRoute(req, res) {
  User
    .findOne({name: req.params.name})
    // .populate('team') // turn team id into team object with full details
    .exec()
    .then((user) => {
      if(!user) return res.status(404).end();
      res.render('user/profile', {user});
    })
    .catch(() => {
      res.status(500).end();
    });
}

function newRoute(req, res) {
  User
    .find()
    .exec()
    .then((user) =>  res.render('user/new', { user }));
}

module.exports = {
  // index: indexRoute,
  users: usersRoute,
  user: userRoute,
  new: newRoute
  // racer: racerRoute,
  // team: teamRoute,
  // event: eventRoute,
  // result: resultRoute,
  // news: newsRoute,
};
