const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const HomieCircles = require('../models/homiecircles');
const tp = require('../middleware/TokenProcessor');
const axios = require('axios').default;
require('dotenv').config();

router.post('/movieList', async (req, res, next) => {
  // // const {id} = req.body;

  // id = 1;

  // // Get the homieCircle object
  // const homieCircle = await HomieCircles.query('Id')
  //   .eq(id)
  //   .exec()
  //   .catch(err => {
  //     next(err);
  //   });

  // if (!homieCircle) {
  //   console.log('lol');
  //   res.status(404);
  // }

  // // Obtain the set of genres
  // const genres = await bcrypt
  //   .compare(password, homieCircle[0].genres)
  //   .catch(err => {
  //     res.status(403);
  //   });

  // // Obtain the Previous Page Number
  // let page = await bcrypt.compare(password, homieCircle[0].page).catch(err =>
  // {
  //   res.status(403);
  // });

  // // Need to update table value
  // if (!page) {
  //   page = 1;
  // }
  page = 1;

  let genres = new Set();
  genres.add(28);
  var genre = genres.values().next().value;
  console.log(genre);
  if (!genres) {
    res.status(401);
  } else {
    const language = 'en-US';
    const sort_by = 'popularity.desc';
    const include_adult = false;
    const include_video = false;

    const response = await axios.get(
      'https://api.themoviedb.org/3/discover/movie',
      {
        params: {
          api_key: process.env.MOVIE_TOKEN,
          language: language,
          sort_by: sort_by,
          include_adult: include_adult,
          include_video: include_video,
          page: page,
          with_genres: genre,
        },
      }
    );
    // .catch(error => {
    //   // handle error
    //   console.log(error);
    // });
    console.log(response);
    // const instance = axios.create({
    //   baseURL: 'https://api.themoviedb.org/3/discover/movie?',
    //   timeout: 1000,
    //   headers: {
    //     language: language,
    //     sort_by: sort_by,
    //     include_adult: include_adult,
    //     include_video: include_video,
    //     page: page,
    //     with_genres: genres,
    //   },
    // });
  }
  //   // const token = tp.generateToken(credentials[0].user.id);
  //   // res.json({ token });
  // }
  // res.send();
});

module.exports = router;
