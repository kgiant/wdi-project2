const router = require('express').Router();

const statics = require('../controllers/statics');
const sessions = require('../controllers/sessions');
const user = require('../controllers/user');
const racer = require('../controllers/racer');
const event = require('../controllers/event');
const results = require('../controllers/result');


router.get('/', (req, res) => res.render('statics/index'));








module.exports = router;
