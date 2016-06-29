/* eslint-disable new-cap, no-underscore-dangle, no-console */

import express from 'express';
import Weapon from '../models/weapon';
const router = module.exports = express.Router();

// getting all the creatures from the DB
router.get('/', (req, res) => {
  Weapon.find((err, weapons) => {
    if (err) console.log('err');
    return res.send({ weapons });
  });
});

// add a new creature
router.post('/', (req, res) => {
  const weapon = new Weapon(req.body);
  weapon.save((err) => {
    if (err) console.log('err');
    res.send({ weapon });
  });
});
