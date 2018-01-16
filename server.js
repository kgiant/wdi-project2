const express        = require('express');
const morgan         = require('morgan');
const expressLayouts = require('express-ejs-layouts');
const routes         = require('./config/routes');
const mongoose       = require('mongoose');
mongoose.Promise     = require('bluebird');
// const methodOverride = require('method-override');
// const session = require('express-session');
// const flash = require('express-flash');
// const customResponses = require('./lib/customResponses');
// const authentication = require('./lib/authentication');
// const errorHandler = require('./lib/errorHandler');

const { port, env, dbURI } = require('./config/environment');

const app = express();

mongoose.connect(dbURI);

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);
app.use(expressLayouts);
app.use(express.static(`${__dirname}/public`));
if(env === 'development') app.use(morgan('dev'));


// app.use(session({
//   secret: sessionSecret,
//   resave: false,
//   saveUninitialized: false
// }));

// app.use(flash());
//app.use(customResponses);
// app.use(bodyParser.urlencoded({ extended: true }));

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
//       res.locals.user = user;
//       res.locals.isLoggedIn = true;
//
//       next();
//     });
// });

// app.use(methodOverride(function (req) {
//   if (req.body && typeof req.body === 'object' && '_method' in req.body) {
//     const method = req.body._method;
//     delete req.body._method;
//     return method;
//   }
// }));

// app.use(authentication);
app.use(routes);
// app.use(errorHandler);


app.listen(port, () => console.log(`Express is listening on port ${port}`));
