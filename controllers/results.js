// const Results = require('../models/result'); 

function resultRoute(req, res){
  res.render('statics/results');
}

module.exports = {
  result: resultRoute
};
