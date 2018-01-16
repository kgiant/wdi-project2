const router = require('express').Router();

const statics = require('../controllers/statics');
// const sessions = require('../controllers/sessions');
const user = require('../controllers/users');
const racer = require('../controllers/racers');
const event = require('../controllers/events');
const result = require('../controllers/results');
const team = require('../controllers/teams');
const news = require('../controllers/news');


// router.get('/', (req, res) => res.render('statics/index'));
router.route('/').get(statics.index);
router.route('/events').get(event.events);
router.route('/events/:name').get(event.event);
router.route('/event/new').get(event.new);

// router.route('/event/create').get(event.create);
router.route('/racers')
  .get(racer.racers)
  .post(racer.create);
router.route('/racer/new')
  .get(racer.new);
router.route('/racers/:name')
  .get(racer.racer)
  .put(racer.update)
  .delete(racer.delete);
router.route('/racers/:name/edit')
  .get(racer.edit);


router.route('/users')
  .get(user.users)
  .post(user.create);
router.route('/user/new')
  .get(user.new);
router.route('/users/:name')
  .get(user.user)
  .put(user.update)
  .delete(user.delete);
router.route('/users/:name/edit')
  .get(user.edit);
router.route('/login')
  .get(user.login);

router.route('/teams')
  .get(team.teams)
  .post(team.create);
router.route('/team/new')
  .get(team.new);
router.route('/teams/:name')
  .get(team.team)
  .put(team.update)
  .delete(team.delete);
router.route('/teams/:name/edit')
  .get(team.edit);


router.route('/news')
  .get(news.newss)
  .post(news.create);
router.route('/news/:name').get(news.news);
router.route('/news/new').get(news.new);

router.route('/results').get(result.result);

// router.get('/racers', (req, res) => res.render('statics/racers.ejs'));
// router.get('/users', (req, res) => res.render('statics/users.ejs'));
// router.get('/events', (req, res) => res.render('statics/events.ejs'));
// router.get('/results', (req, res) => res.render('statics/results.ejs'));
// router.get('/teams', (req, res) => res.render('statics/teams.ejs'));
// router.get('/addracer', (req, res) => res.render('racer/new.ejs'));

// router.get('/addevent', (req, res) => res.render('event/new.ejs'));
router.get('/adduser', (req, res) => res.render('user/new.ejs'));
router.get('/addresult', (req, res) => res.render('result/new.ejs'));
router.get('/addteam', (req, res) => res.render('team/new.ejs'));
router.get('/addnews', (req, res) => res.render('news/new.ejs'));


module.exports = router;
