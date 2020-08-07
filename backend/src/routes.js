const express = require('express');
const getVersion = require('./controllers');
const router = express.Router();

const passport = require('passport');
const dotenv = require('dotenv').config();
const util = require('util');
const url = require('url');
const querystring = require('querystring');
const secured = require('./middlewares/secured');

router.get('/version', getVersion);

// Perform the login, after login Auth0 will redirect to callback
router.get('/login', passport.authenticate('auth0', {
  scope: 'openid email profile'
  // scope: 'email profile'
}), (req, res) => {
  res.redirect('/');
});

// Perform the final stage of authentication and redirect to previously requested URL or '/user'
router.get('/callback', function (req, res, next) {
  passport.authenticate('auth0', function (err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.redirect('/login'); }
    req.logIn(user, function (err) {
      if (err) { return next(err); }
      const returnTo = req.session.returnTo;
      delete req.session.returnTo;
      res.redirect(returnTo || '/user');
    });
  })(req, res, next);
});

// Perform session logout and redirect to homepage
router.get('/logout', (req, res) => {
  req.logout();

  let returnTo = req.protocol + '://' + req.hostname;
  const port = req.connection.localPort;
  if (port !== undefined && port !== 80 && port !== 443) {
    returnTo += ':' + port;
  }
  const logoutURL = new url.URL(
    util.format('https://%s/v2/logout', process.env.AUTH0_DOMAIN)
  );
  const searchString = querystring.stringify({
    client_id: process.env.AUTH0_CLIENT_ID,
    returnTo: returnTo
  });
  logoutURL.search = searchString;

  res.redirect(logoutURL);
});

router.get('/user', (req, res, next) => {
  const { _raw, _json, ...userProfile } = req.user;
  console.log(userProfile.nickname);
  res.render('user', {
    userProfile: JSON.stringify(userProfile, null, 2),
    title: 'Profile page',
    nickname: JSON.stringify(userProfile.nickname, null, 2),
  });
});

router.get('/', (req, res, next) => {
  res.render('index', { 
    title: 'Auth0 Webapp sample Nodejs',
    message: 'hello'
  });
});

module.exports = router;
