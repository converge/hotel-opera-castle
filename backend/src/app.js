const express = require('express');
const router = require('./routes');
const session = require('express-session');
const dotenv = require('dotenv').config();
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const userInViews = require('./middlewares/userInViews');

const strategy = new Auth0Strategy({
    domain: process.env.AUTH0_DOMAIN,
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    callbackURL: process.env.AUTH0_CALLBACK_URL,
    state: true
},
(accessToken, refreshToken, extraParams, profile, done) => {
    // accessToken is the token to call Auth0 API (not needed in the most cases)
    // extraParams.id_token has the JSON Web Token
    // profile has all the information from the user
    return done(null, profile);
});
passport.use(strategy);

passport.serializeUser( (user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});


// config express session
// TODO: colocar isso em outro arquivo
const sess = {
    secret: 'random-secret-here',
    cookie: {},
    resave: false,
    saveUninitialized: true
};

const appController = () => {
    const app = express();

    app.set('view engine', 'pug')

    app.use(express.json());
    
    app.use(session(sess));
    app.use(passport.initialize());
    app.use(passport.session());
    
    app.use(router);
    
    
    app.use(userInViews());

    // ?
    // app.use('/', router);


    return app;
}

module.exports = appController;
