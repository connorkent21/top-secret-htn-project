const express = require('express');
const router = express.Router();
const homieCircleModel = require('../models/homiecircles');
const userModel = require('../models/users');

router.post('/genre', async (req, res, next) => {

  console.log("Hi");

  const homieCircleID = req.body.homieCircleID;
  const genres = req.body.genres;

  const homieCircle = await homieCircleModel.query('id')
    .eq(homieCircleID)
    .exec()
    .catch((err) => {
      next(err);
    });

  if (!homieCircle) {
    res.status(404);
  }

  homieCircle.genres = genres;

  // TODO add error checking
  await homieCircle.save();

});

router.post('/homies', async (req, res, next) => {

  const homieCircleID = req.body.homieCircleID;
  const newHomieID = req.body.newHomieID; 

  const homieCircle = await homieCircleModel.query('id')
  .eq(homieCircleID)
  .exec()
  .catch((err) => {
    next(err);
  });

  if (!homieCircle) {
    res.status(404);
  }

  const newHomie = await userModel.query('id')
  .eq(newHomie)
  .exec()
  .catch((err) => {
    next(err);
  });

  if (!newHomie) {
    res.status(404);
  }

  homieCircle.users.add(newHomie);

  // TODO add error checking
  await homieCircle.save();

});

module.exports = router;
