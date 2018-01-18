const User = require('../models/user');

// not using, using user.login instead
function sessionsNew(req, res) {
  res.render('sessions/new');
}

function sessionsCreate(req, res, next) {
  console.log(req.body);
  User
    .findOne({ email: req.body.email })
    .then((user) => {
      console.log(user);
      if(!user || !user.validatePassword(req.body.password)) {
        req.flash('danger', 'Unknown email/password combination');
        // console.log('check3');
        return res.redirect('/login');
      }

      req.session.userId = user.id;
      req.user = user;

      req.flash('success', `Welcome back, ${user.username}!`);
      res.redirect('/');
    })
    .catch(next);
}

function sessionsDelete(req, res) {
  req.session.regenerate(() => res.redirect('/'));
}

module.exports = {
  new: sessionsNew,
  create: sessionsCreate,
  delete: sessionsDelete
};
