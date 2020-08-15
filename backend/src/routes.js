const express = require('express');
const getVersion = require('./controllers/index');
const {
  listUsers,
  addUser,
  editUser,
  deleteUser
} = require('./controllers/users');

const router = express.Router();

router.get('/', getVersion);

router.get('/users', listUsers);
router.post('/users', addUser);
router.put('/users/:id', editUser);
router.delete('/users/:id', deleteUser);

module.exports = router;
