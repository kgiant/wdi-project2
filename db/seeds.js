const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const env = process.env.NODE_ENV || 'development';
const dbURI = process.env.MONGODB_URI || `mongodb://localhost/project2-${env}`;
mongoose.connect(dbURI);

const Racer = require('../models/racer');
const User = require('../models/user');
const Team = require('../models/team');
const Event = require('../models/event');
// const Result = require('../models/results');
const News = require('../models/news');

Racer.collection.drop();
Team.collection.drop();
Event.collection.drop();
User.collection.drop();
News.collection.drop();

Racer
  .create([{
    name: 'Mikaela SHIFFRIN',
    country: 'USA',
    category: 'Ladies',
    discipline: ['SL', 'GS'],
    favoriteSpot: 'Vail, Colorado, USA',
    fisRank: 1,
    image: 'http://www.fis-ski.com/mm/Photo/Photo/General/51/24/5124_G08_W01.jpg',
    sponsors: ['Atomic', 'Salomon']
  }, {
    name: 'Viktoria REBENSBURG',
    country: 'Germany',
    category: 'Ladies',
    discipline: ['SL', 'GS'],
    favoriteSpot: 'Vail, Colorado, USA',
    fisRank: 2,
    image: 'http://www.fis-ski.com/mm/Photo/Photo/General/11/17/78/111778_G08_W01.jpg',
    sponsors: ['Stoeckli', 'Lange']
  }, {
    name: 'Petra VLHOVA',
    country: 'Slovakia',
    category: 'Ladies',
    discipline: ['SL', 'GS'],
    favoriteSpot: 'Les Arcs, Bourg-Saint-Maurice, France',
    fisRank: 3,
    image: 'http://www.fis-ski.com/mm/Photo/Photo/General/10/80/84/108084_G08_W01.jpg',
    sponsors: ['Rossignol', 'Look']
  },
  {
    name: 'Wendy HOLDENER',
    country: 'Switzerland',
    category: 'Ladies',
    discipline: ['SL', 'GS'],
    favoriteSpot: 'Vail, Colorado, USA',
    fisRank: 4,
    image: 'http://www.fis-ski.com/mm/Photo/Photo/General/10/95/64/109564_G08_W01.jpg',
    sponsors: ['Head']
  },
  {
    name: 'Marcel HIRSCHER',
    country: 'Austria',
    category: 'Men',
    discipline: ['SL', 'GS'],
    favoriteSpot: 'Kitzbuhel, Austria',
    fisRank: 1,
    image: 'http://www.fis-ski.com/mm/Photo/Photo/General/07/52/91/75291_G08_W01.jpg',
    sponsors: ['Atomic', 'Salomon']
  }, {
    name: 'Henrik KRISTOFFERSEN',
    country: 'Norway',
    category: 'Men',
    discipline: ['SL', 'GS'],
    favoriteSpot: 'Adelboden, Switzerland',
    fisRank: 2,
    image: 'http://www.fis-ski.com/mm/Photo/Photo/General/10/95/67/109567_G08_W01.jpg',
    sponsors: ['Atomic', 'Salomon']
  }, {
    name: 'Kjetil JANSRUD',
    country: 'Norway',
    category: 'Men',
    discipline: ['SL', 'GS'],
    favoriteSpot: 'Vail, Colorado, USA',
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


Team
  .create([{
    name: 'Team-USA',
    country: 'USA',
    image: 'https://www.countries-ofthe-world.com/flags-normal/flag-of-United-States-of-America.png'
  }, {
    name: 'Team-Germany',
    country: 'Germany',
    image: 'https://www.countries-ofthe-world.com/flags-normal/flag-of-Germany.png'
  }, {
    name: 'Team-Slovakia',
    country: 'Slovakia',
    image: 'https://www.countries-ofthe-world.com/flags-normal/flag-of-Slovakia.png'
  },
  {
    name: 'Team-Switzerland',
    country: 'Switzerland',
    image: 'https://www.countries-ofthe-world.com/flags-normal/flag-of-Switzerland.png'
  },
  {
    name: 'Team-Austria',
    country: 'Austria',
    image: 'https://www.countries-ofthe-world.com/flags-normal/flag-of-Austria.png'
  }, {
    name: 'Team-Norway',
    country: 'Norway',
    image: 'https://www.countries-ofthe-world.com/flags-normal/flag-of-Norway.png'
  }, {
    name: 'Team-Italy',
    country: 'Italy',
    image: 'https://www.countries-ofthe-world.com/flags-normal/flag-of-Italy.png'
  }, {
    name: 'Team-Slovenia',
    country: 'Slovenia',
    image: 'https://www.countries-ofthe-world.com/flags-normal/flag-of-Slovenia.png'
  }, {
    name: 'Team-Sweden',
    country: 'Sweden',
    image: 'https://www.countries-ofthe-world.com/flags-normal/flag-of-Sweden.png'
  }, {
    name: 'Team-Croatia',
    country: 'Croatia',
    image: 'https://www.countries-ofthe-world.com/flags-normal/flag-of-Croatia.png'
  }, {
    name: 'Team-Finland',
    country: 'Finland',
    image: 'https://www.countries-ofthe-world.com/flags-normal/flag-of-Finland.png'
  }, {
    name: 'Team-Canada',
    country: 'Canada',
    image: 'https://www.countries-ofthe-world.com/flags-normal/flag-of-Canada.png'
  }, {
    name: 'Team-France',
    country: 'France',
    image: 'https://www.countries-ofthe-world.com/flags-normal/flag-of-France.png'
  }])
  .then((teams) => {
    console.log(`${teams.length} teams created!`);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    mongoose.connection.close();
  });

Event
  .create([{
    date: '13.-17.1.2018',
    location:	'Folgaria - Fondo Grande',
    sport:	'AL',
    country:	'ITA',
    discipline:	'6xSL',
    category:	'L M',
    championship: ['FIS, NUR, NJR']
  }, {
    date: '14.-15.1.2018',
    location:	'Kirchberg',
    sport:	'AL',
    country: 'AUT',
    discipline:	'2xGS',
    category:	'M',
    championship: ['EC']
  }, {
    date: '14.-15.1.2018',
    location:	'Krvavec',
    sport:	'AL',
    country:	'SLO',
    discipline:	'6xGS',
    category:	'L M',
    championship: ['FIS']
  }, {
    date: '15.-19.1.2018',
    location:	'St. Lambrecht (AUT)' ,
    sport:	'AL',
    country:	'HUN',
    discipline:	'4xGS - 8xSG - 4xAC',
    category:	'L M',
    championship: ['JC, NC, NJR, FIS']
  }, {
    date: '15.-19.1.2018',
    location:	'Zauchensee',
    sport:	'AL',
    country: 'AUT',
    discipline:	'4xDH - SG',
    category:	'L',
    championship: ['TRA, EC']
  }, {
    date: '15.-16.1.2018',
    location:	'Zagreb-Sljeme',
    sport:	'AL',
    country:	'CRO',
    discipline:	'4xSL',
    category:	'L M',
    championship: ['FIS']
  }, {
    date: '15.-19.1.2018',
    location:	'Spindleruv Mlyn',
    sport:	'AL',
    country:	'CZE',
    discipline:	'8xDH - 4xSG - 4xAC',
    category:	'L M',
    championship: ['NC, FIS, TRA']
  }])
  .then((events) => {
    console.log(`${events.length} events created!`);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    mongoose.connection.close();
  });



User
  .create([{
    name: 'John Smith',
    country: 'USA',
    position: 'Manager',
    role: 'User',
    email: '1s@os.com'
  }, {
    name: 'Ralph Schuster',
    country: 'Austria',
    position: 'Coach',
    role: 'User',
    email: '2s@os.com'
  }, {
    name: 'Karl Heinz',
    country: 'Germany',
    position: 'Coach',
    role: 'User',
    email: '3s@os.com'
  }, {
    name: 'Maria Georgievich',
    country: 'Slovakia',
    position: 'Manager',
    role: 'User',
    email: '4s@os.com'
  }])
  .then((users) => {
    console.log(`${users.length} users created!`);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    mongoose.connection.close();
  });

News
  .create([{
    title: 'Goggia leads Italian podium sweep in Bad Kleinkirchheim',
    article: 'Sofia Goggia returned to her winning ways before hitting PyeongChang with a downhill victory at Bad Kleinkichheim on Sunday. Skiing down a shortened course using the super-G start due to fog on the upper mountain, Goggia was characteristically aggressive and risky, and the style paid of massively. She bested her teammates Federica Brignone (whose previous best downhill result was 12th place) by 1.10 seconds and Nadia Fanchini (who suffered a season-ending injury almost exactly one year earlier) by 1.45 seconds, but the Italian trio still swept the podium. An early morning training run from the reserve start challenged the world s best in tricky conditions with fog and light snow. Officials decided to lower the race to the super-G start as fog blanketed the top of the mountain through the 11:15 start time. It was a short course, but one that still required a high technical level and precise tactics. Beyond the podium, Tiffany Gauthier of France matched her previous day s career-best finish with a fourth place result from bib 36. Marta Bassino of Italy nearly joined her teammates on the podium with blazing early splits and ultimately finished a downhill career-best 10th from bib 45. The Audi FIS Ski World Cup ladies tour moves on to Cortina d Ampezzo, Italy, for two downhills and a super-G race starting on Friday. Full results from today s race are available here.',
    image: 'http://www.fis-ski.com/mm/Photo/Photo/General/11/46/32/114632_G08_W01.jpg'
  }, {
    title: '5 slaloms in a row for Marcel Hirscher!',
    article: 'On Sunday, the tech racers take over the hill in Wengen and race a slalom on the Jungfrau / Männlichen course. Despite a record holding biography, the Austrian star had never celebrated a win on this slalom hill in the past and was looking to get even. With a +0.35 advantage over André Myhrer and +0.59 on slalom whiz Henrik Kristoffersen from the first run, Hirscher could charge the second run and ski to his 25th slalom win, claimed in 15 different resorts. This slalom win also makes it 5 in a row for Marcel Hirscher. Another record he hadn’t achieved before today. Marcel Hirscher is now one World Cup win shy of legend Hermann Maier in second place of all-time. The Norwegian slalom globe winner of 2016 participated in his 100th World Cup race today, earning a total of 40 podiums, a pretty impressive quote that surpasses the number Marcel Hirscher had at that point in his career. However, Henrik Kristoffersen hopes for more wins, and not “only” podiums. Since the start of this season, he was on the podium at every race, but wasn’t able to win yet. He becomes the first athlete to record more than five slalom podiums without a win. In 3rd place, André Myhrer confirms his great shape and takes the fourth place of the discipline standings that he won in 2012. The Swede found his pace in the first run and was able to hold on to the podium also in the second run, to grab a 26th podium in career. The World Cup Tour now stands ahead of another intense race week in Kitzbuehel, with a super-g on Friday, the Hahnenkamm downhill on Saturday and a slalom on the Ganslerhang on Sunday.',
    image: 'http://www.fis-ski.com/mm/Photo/Photo/General/11/45/93/114593_G08_W01.jpg'
  }, {
    title: 'Brignone brings it in Bad Kleinkirchheim super-G',
    article: 'Federica Brignone of Italy was the surprise winner of the super-G in Bad Kleinkirchheim on Saturday. After the ladies were prevented from skiing the bottom portion of the race slope during the week, the hill set up overnight and was in race-worthy condition for Saturday morning. Lara Gut of Switzerland skied with precision from bib 7 to take the early lead despite catching her arm on the fourth to final gate and finishing her run with only a single pole. Brignone followed one skier later with a hard-charging run to take a 0.18-second lead over Gut. Austrian Conny Huetter, with bib 13, squeezed out her first super-G podium finish of the season at the resort that s only 20 minutes from her boyfriend s home. Tiffany Gauthier of France had a career-best finish in fourth, followed by Nadia Fanchini in fifth. Fanchini s sister, Elena, was recently diagnosed with a tumor that she is being treated for which will prevent her from starting any more races this season. For Nadia Fanchini, it was the best result of her season so far. Edit Miklos of Hungary appeared to injure her knee during her run and crashed hard in the finish area. She was transported by helicopter to the hospital for evaluation of potential injuries. On Jan. 15, 2017, she suffered a season-ending injury to both of her knees during downhill training in Zauchensee, Austria. The ladies were originally scheduled to complete a downhill training run following the super-G race, but the jury decided to limit the competitors to an inspection due to limited time and course conditions. They will complete a downhill training run from the reserve start on Sunday morning at 9:00 followed by the downhill race at 11:15 CET.',
    image: 'http://www.fis-ski.com/mm/Photo/Photo/General/11/42/99/114299_G08_W01.jpg'
  }, {
    title: 'Beat Feuz wins Lauberhorn downhill',
    article: 'Taking the win in front of your home crowd, on a legendary track, on a beautiful sunny day, is pretty much as good as it gets. Beat Feuz had the honour today in Wengen as he won the legendary Lauberhorn downhill ahead of Aksel Lund Svindal and Matthias Mayer. Feuz came down with bib number one and his run held up through a competitive field. Feuz had to sweat it out in the leader s box as one-by-one his competitors came close but could not top the Swiss speed star. He withstood his first major test with Svindal came down two racers later, dangerously close to spoiling the Feuz fairy tale, but ultimately finishing 0.18 seconds behind.  German Thomas Dressen also challenged two races later, but ultimately had to settled for fifth place nearly a second behind Feuz, the next scare for the home crowd with their red and white flags came when Austrian Matthias Mayer was in the hunt. Wearing bib 11, he was close to Feuz, but finished 0.67 behind, good enough for the final podium place on the day. After Wengen suffered the after effects of a major storm early in the week, the legendary race recovered amazing well as there was no sign of the major wind damage from earlier in the week. thousands of fans flocked to the Berner Oberland resort and enjoyed beautiful blue skies and as a bonus a Swiss victory. The final race of the busy three competition weekend takes place tomorrow when the tech stars take center stage in the slalom.',
    image: 'http://www.fis-ski.com/mm/Photo/Photo/General/11/42/93/114293_G08_W01.jpg'
  }])
  .then((news) => {
    console.log(`${news.length} news created!`);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    mongoose.connection.close();
  });
