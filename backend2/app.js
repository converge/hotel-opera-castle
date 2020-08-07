const express = require('express');
const router = require('./routes');
const session = require('express-session');
// const { keycloakMiddleware, memoryStore } = require('./middlewares/keycloak');
const Keycloak = require('keycloak-connect');

const kConfig = {
  "clientId": "opera-hotel",
  "bearerOnly": true,
  "serverUrl": "http://localhost:8080/auth",
  "realm": "opera-hotel",
  "realPublicKey": ""
}

const appController = () => {
  const app = express();

  var memoryStore = new session.MemoryStore();
  var keycloak = new Keycloak({ store: memoryStore }, kConfig);

  //session
  app.use(session({
    secret:'BeALongSecret',
    resave: false,
    saveUninitialized: true,
    store: memoryStore
  }));

  app.use(keycloak.middleware());
  // app.use(keycloakMiddleware.middleware());

  app.get( '/check-sso', keycloak.checkSso(), (req, res) => {
    res.send('12');
  });


  app.get('/alo', keycloak.protect(), (req, res) => {
    res.send('works!');
  });

  app.use( keycloak.middleware( { logout: '/'} ));

  app.use(express.json());
  
  app.use(router);

  return app;
}

module.exports = appController;
