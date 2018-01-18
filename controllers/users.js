// const sessions = require('../models/sessions');
const User = require('../models/user');
// const Racer = require('../models/racer');
// const Event = require('../models/event');
// const Results = require('../models/result');
// const Team = require('../models/team');
const News = require('../models/news');



function loginRoute(req, res){
  res.render('user/login');
}

function usersRoute(req, res){
  User
    .find(req.query)
    .exec()
    .then((users) => {
      if(!users) return res.status(404).end();
      News
        .find()
        .exec()
        .then((newsItems) => {
          res.render('statics/users', {users, newsItems});
        })
        .catch(() => {
          res.status(500).end();
        });
    })
    .catch(() => {
      res.status(500).end();
    });
}

// show user profile - NOT used for now
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

// create new record
function createRoute(req, res){
  console.log('check1');
  console.log(req.body);
  User
    .create(req.body)
    .then((user) => {
      console.log('check2');
      req.flash('info', `Thanks for registering, ${user.username}! Please login to manage your team.` );
      // res.redirect('/');
      console.log('check3');
      res.redirect('/login');
      console.log('check4');
    })
    .catch((err) => {
      if(err.name ==='ValidationError'){
        // return res.badRequest('user/new', err.toString());
        return res.status(400).render('user/new', {message: 'There was a problem with your entries. Please enter your details again.'});
      }
      res.status(500).end();
    });
}

function editRoute(req, res) {
  User
    .findOne({name: req.params.name})
    // .populate('team') // turn team id into team object with full details
    .exec()
    .then((user) => {
      if(!user) return res.status(404).end();
      res.render('user/edit', {user});
    })
    .catch(() => {
      res.status(500).end();
    });
}

function userUpdate(req, res) {
  User
    .findById(req.params.name)
    .exec()
    .then((user) => {
      if(!user) return res.status(404).send('Not found');

      user = Object.assign(user, req.body);

      return user.save();
    })
    .then(() => {
      res.redirect('/users');
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

function userDelete(req, res) {
  User
    .findById(req.params.name)
    .exec()
    .then((user) => {
      if(!user) return res.status(404).send('Not found');
      return user.remove();
    })
    .then(() => {
      res.redirect('/users');
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

module.exports = {
  users: usersRoute,
  user: userRoute,
  new: newRoute,
  create: createRoute,
  edit: editRoute,
  update: userUpdate,
  delete: userDelete,
  login: loginRoute
};
