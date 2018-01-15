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
router.route('/')
  .get(statics.index);
router.route('/events')
  .get(event.event);
router.route('/racers')
  .get(racer.racers);
router.route('/results')
  .get(result.result);
router.route('/teams')
  .get(team.team);
router.route('/users')
  .get(user.user);
router.route('/news')
  .get(news.news);
router.route('/racer/:name')
  .get(racer.racer);

// router.get('/racers', (req, res) => res.render('statics/racers.ejs'));
// router.get('/users', (req, res) => res.render('statics/users.ejs'));
// router.get('/events', (req, res) => res.render('statics/events.ejs'));
// router.get('/results', (req, res) => res.render('statics/results.ejs'));
// router.get('/teams', (req, res) => res.render('statics/teams.ejs'));
router.get('/addracer', (req, res) => res.render('racer/new.ejs'));
router.get('/addevent', (req, res) => res.render('event/new.ejs'));
router.get('/adduser', (req, res) => res.render('user/new.ejs'));
router.get('/addresult', (req, res) => res.render('result/new.ejs'));
router.get('/addteam', (req, res) => res.render('team/new.ejs'));
router.get('/addnews', (req, res) => res.render('news/new.ejs'));


module.exports = router;
