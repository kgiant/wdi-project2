const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const env = process.env.NODE_ENV || 'development';
const dbURI = process.env.MONGODB_URI || `mongodb://localhost/project2-${env}`;
mongoose.connect(dbURI);

const Racer = require('../models/racer');
// const User = require('../models/user');
// const Team = require('../models/team');
// const Event = require('../models/event');
// const Result = require('../models/results');
// const News = require('../models/news');

Racer.collection.drop();

Racer
  .create([{
    name: 'Mikaela SHIFFRIN',
    country: 'USA',
    category: 'Ladies',
    fisRank: 1,
    image: 'http://www.fis-ski.com/mm/Photo/Photo/General/51/24/5124_G08_W01.jpg',
    sponsors: ['Atomic', 'Salomon']
  }, {
    name: 'Viktoria REBENSBURG',
    country: 'Germany',
    category: 'Ladies',
    fisRank: 2,
    image: 'http://www.fis-ski.com/mm/Photo/Photo/General/11/17/78/111778_G08_W01.jpg',
    sponsors: ['Stoeckli', 'Lange']
  }, {
    name: 'Petra VLHOVA',
    country: 'Slovakia',
    category: 'Ladies',
    fisRank: 3,
    image: 'http://www.fis-ski.com/mm/Photo/Photo/General/10/80/84/108084_G08_W01.jpg',
    sponsors: ['Rossignol', 'Look']
  },
  {
    name: 'Wendy HOLDENER',
    country: 'Switzerland',
    category: 'Ladies',
    fisRank: 4,
    image: 'http://www.fis-ski.com/mm/Photo/Photo/General/10/95/64/109564_G08_W01.jpg',
    sponsors: ['Head']
  },
  {
    name: 'Marcel HIRSCHER',
    country: 'Austria',
    category: 'Men',
    fisRank: 1,
    image: 'http://www.fis-ski.com/mm/Photo/Photo/General/07/52/91/75291_G08_W01.jpg',
    sponsors: ['Atomic', 'Salomon']
  }, {
    name: 'Henrik KRISTOFFERSEN',
    country: 'Norway',
    category: 'Men',
    fisRank: 2,
    image: 'http://www.fis-ski.com/mm/Photo/Photo/General/10/95/67/109567_G08_W01.jpg',
    sponsors: ['Atomic', 'Salomon']
  }, {
    name: 'Kjetil JANSRUD',
    country: 'Norway',
    category: 'Men',
    fisRank: 3,
    image: 'http://www.fis-ski.com/mm/Photo/Photo/General/10/95/69/109569_G08_W01.jpg',
    sponsors: ['Atomic', 'Salomon']
  }])
  .then((racers) => {
    console.log(`${racers.length} racers created!`);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    mongoose.connection.close();
  });
