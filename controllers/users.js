// const sessions = require('../models/sessions');
const User = require('../models/user');
// const Racer = require('../models/racer');
// const Event = require('../models/event');
// const Results = require('../models/result');
// const Team = require('../models/team');
// const News = require('../models/news');



function userRoute(req, res){
  res.render('statics/users');
}


module.exports = {
  // index: indexRoute,
  user: userRoute
  // racer: racerRoute,
  // team: teamRoute,
  // event: eventRoute,
  // result: resultRoute,
  // news: newsRoute,
};
