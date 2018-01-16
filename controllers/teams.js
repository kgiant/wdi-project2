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

module.exports = {
  // index: indexRoute,
  // user: userRoute,
  // racer: racerRoute,
  teams: teamsRoute,
  team: teamRoute
  // event: eventRoute,
  // result: resultRoute,
  // news: newsRoute,
};
