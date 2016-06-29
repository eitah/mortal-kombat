/* eslint-disable new-cap, no-underscore-dangle, no-console */

import express from 'express';
import Creature from '../models/creature';
const router = module.exports = express.Router();

// getting all the creatures from the DB
router.get('/', (req, res) => {
  Creature.find((err, creatures) => {
    if (err) console.log('err');
    return res.send({ creatures });
  });
});

// add a new creature
router.post('/', (req, res) => {
  const creature = new Creature(req.body);
  creature.save((err) => {
    if (err) console.log('err');
    res.send({ creature });
  });
});
