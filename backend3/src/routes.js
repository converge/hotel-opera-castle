const express = require('express');
const getVersion = require('./controllers/index');
const { getUser, createUser } = require('./controllers/users');
const router = express.Router();

router.get('/version', getVersion);
router.get('/users', getUser);
router.post('/users', createUser);

module.exports = router;
