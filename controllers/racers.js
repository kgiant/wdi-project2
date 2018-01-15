// const sessions = require('../models/sessions');
// const User = require('../models/user');
const Racer = require('../models/racer');
// const Event = require('../models/event');
// const Results = require('../models/result');
// const Team = require('../models/team');
// const News = require('../models/news');

function racersRoute(req, res){
  Racer
    .find()
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
    .findOne({name: req.params.userId})
    .exec()
    .then((racer) => {
      if(!racer) return res.status(404).end();
      res.render('racer/profile', {racer});
    })
    .catch(() => {
      res.status(500).end();
    });
}

module.exports = {
  // index: indexRoute,
  // user: userRoute,
  racers: racersRoute,
  racer: racerRoute
  // team: teamRoute,
  // event: eventRoute,
  // result: resultRoute,
  // news: newsRoute,
};
