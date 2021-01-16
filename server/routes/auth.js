const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const Credentials = require('../models/credentials');
const Users = require('../models/users');
const tp = require('../middleware/TokenProcessor');

router.post('/login', async (req, res, next) => {
  const { loginId, password } = req.body;

  // Get credentials doc for loginId
  const credentials = await Credentials.query('loginId')
    .eq(loginId)
    .exec()
    .catch((err) => {
      next(err);
    });

  if (!credentials) {
    res.status(404);
  }

  // Compare passwords
  const passwordIsValid = await bcrypt
    .compare(password, credentials[0].Password)
    .catch((err) => {
      res.status(403);
    });

  if (!passwordIsValid) {
    res.status(401);
  } else {
    const token = tp.generateToken(credentials[0].user.id);
    res.json({ token });
  }
  res.send();
});

router.get('/info', tp.authenticateToken, (req, res, next) => {
  res.sendStatus(200);
});

router.get('/user', tp.authenticateToken, (req, res, next) => {
  const { userId } = req.body;
  Users.query('id')
    .eq(userId)
    .exec()
    .then((user) => res.json(user))
    .catch((err) => next(err));
});

module.exports = router;
