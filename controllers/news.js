const News = require('../models/news');

function newssRoute(req, res){
  News
    .find(req.query)
    .populate('team') // turn team id into team object with full details
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
  req.body.createdBy = req.user;
  News
    .create(req.body)
    .then((news) => {
      req.flash('info', `Thanks for adding, ${news.title}!.` );
      res.redirect('/news');
    })
    .catch((err) => {
      if(err.name ==='ValidationError'){
        return res.status(400).render('news/new', {message: 'Passwords do not match'});
      }
      res.status(500).end();
    });
}

function editRoute(req, res) {
  News
    .findOne({name: req.params.name})
    .populate('team') // turn team id into team object with full details
    .exec()
    .then((news) => {
      if(!news) return res.status(404).end();
      res.render('news/edit', {news});
    })
    .catch(() => {
      res.status(500).end();
    });
}

function newsUpdate(req, res) {
  News
    .findById(req.params.name)
    .exec()
    .then((news) => {
      if(!news) return res.status(404).send('Not found');

      news = Object.assign(news, req.body);

      return news.save();
    })
    .then((news) => {
      res.redirect(`/news/${news.name}`);
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

function newsDelete(req, res) {
  News
    .findById(req.params.name)
    .exec()
    .then((news) => {
      if(!news) return res.status(404).send('Not found');
      return news.remove();
    })
    .then(() => {
      res.redirect('/news');
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

module.exports = {
  newss: newssRoute,
  news: newsRoute,
  new: newRoute,
  create: createRoute,
  edit: editRoute,
  update: newsUpdate,
  delete: newsDelete
};
