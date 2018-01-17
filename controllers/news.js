// const sessions = require('../models/sessions');
// const User = require('../models/user');
// const Racer = require('../models/racer');
// const Event = require('../models/event');
// const Results = require('../models/result');
// const Team = require('../models/team');
const News = require('../models/news');



// function newsRoute(req, res){
//   res.render('statics/news');
// }

function newssRoute(req, res){
  News
    .find(req.query)
    .exec()
    .then((newss) => {
      if(!newss) return res.status(404).end();
      res.render('statics/news', {newss});
    })
    .catch(() => {
      res.status(500).end();
    });
}

function newsRoute(req, res) {
  News
    .findOne({name: req.params.name})
    // .populate('team') // turn team id into team object with full details
    .exec()
    .then((news) => {
      if(!news) return res.status(404).end();
      res.render('news/profile', {news});
    })
    .catch(() => {
      res.status(500).end();
    });
}


// Render the registration form
function newRoute(req, res) {
  News
    .find()
    .exec()
    .then((news) =>  res.render('news/new', { news }));
}

function createRoute(req, res){
  // req.body.createdBy = req.user;
  News
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
  // racer: racerRoute,
  // team: teamRoute,
  newss: newssRoute,
  news: newsRoute,
  new: newRoute,
  create: createRoute
  // result: resultRoute,
  // news: newsRoute,
};
