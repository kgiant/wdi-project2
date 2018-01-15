const express        = require('express');
const morgan         = require('morgan');
const expressLayouts = require('express-ejs-layouts');
const routes         = require('./config/routes');
const mongoose       = require('mongoose');
mongoose.Promise     = require('bluebird');
const { port, env, dbURI } = require('./config/environment');

const app = express();

mongoose.connect(dbURI);

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

app.use(expressLayouts);
app.use(express.static(`${__dirname}/public`));
if(env === 'development') app.use(morgan('dev'));

// app.use(bodyParser.urlencoded({ extended: true }));
//
// app.use(flash());
//
// app.use((req, res, next) => {
//   if (!req.session.name) return next();
//   User
//     .findById(req.session.name)
//     .exec()
//     .then((user) => {
//       if(!user) {
//         return req.session.regenerate(() => {
//           res.redirect('/');
//         });
//       }
//
//       res.locals.user = user;
//       res.locals.isLoggedIn = true;
//
//       next();
//     });
// });

app.use(routes);

app.listen(port, () => console.log(`Express is listening on port ${port}`));
