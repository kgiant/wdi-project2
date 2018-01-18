const router      = require('express').Router();
// const statics  = require('../controllers/statics');
const sessions    = require('../controllers/sessions');
const user        = require('../controllers/users');
const racer       = require('../controllers/racers');
const event       = require('../controllers/events');
const result      = require('../controllers/results');
const team        = require('../controllers/teams');
const news        = require('../controllers/news');
const secureRoute = require('../lib/secureRoute');

// router.route('/')
//   .get(statics.index);
router.get('/', (req, res) => res.render('statics/index'));

router.route('/login')
  .get(user.login)
  .post(sessions.create);

router.route('/logout')
  .get(sessions.delete);

// router.all('*', (req, res) => res.notFound());

router.route('/users')
  .get(user.users)   //add secureRoute here
  .post(user.create);
router.route('/user/new')
  .get(user.new);
router.route('/users/:name')
  .get(secureRoute, user.user)
  .put(secureRoute, user.update)
  .delete(secureRoute, user.delete);
router.route('/users/:name/edit')
  .get(secureRoute, user.edit);

router.route('/teams')
  .get(team.teams)
  .post(secureRoute, team.create);
router.route('/team/new')
  .get(secureRoute, team.new);
router.route('/teams/:name')
  .get(team.team)
  .put(secureRoute, team.update)
  .delete(secureRoute, team.delete);
router.route('/teams/:name/edit')
  .get(secureRoute, team.edit);

router.route('/racers')
  .get(racer.racers)
  .post(secureRoute, racer.create);
router.route('/racer/new')
  .get(secureRoute, racer.new);
router.route('/racers/:name')
  .get(racer.racer)
  .put(secureRoute, racer.update)
  .delete(secureRoute, racer.delete);
router.route('/racers/:name/edit')
  .get(secureRoute, racer.edit);

router.route('/news')
  .get(news.newss)
  .post(secureRoute, news.create);
router.route('/news/new')
  .get(secureRoute, news.new);
router.route('/news/:name')
  .get(news.news)
  .put(secureRoute, news.update)
  .delete(secureRoute, news.delete);
router.route('/news/:name/edit')
  .get(secureRoute, news.edit);

router.route('/events')
  .get(event.events);
router.route('/events/:name')
  .get(event.event);
router.route('/event/new')
  .get(event.new);
// router.route('/event/create').get(event.create);

router.route('/results')
  .get(result.result);
// router.get('/addresult', (req, res) => res.render('result/new.ejs'));

module.exports = router;
