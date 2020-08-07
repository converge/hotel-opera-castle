const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('it works!');
});

router.get('/anonymoys', (req, res) => {
  res.send('Hello Anonymous!')
});
router.get('/user', (req, res) => {
  res.send('Hello user!')
});
router.get('/admin', (req, res) => {
  res.send('Hello admin!')
});
router.get('/all-users', (req, res) => {
  res.send('Hello all users!')
});

module.exports = router;
