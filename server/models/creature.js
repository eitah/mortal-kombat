/* eslint-disable func-names, no-unused-vars */

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const creatureSchema = new Schema({
  name: { type: String, required: true, default: 'Jimmy' },
  health: { type: Number, default: 100 },
  image: { type: String, default: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT3ZBlcRfy4d-SFMAEk93P-3ayGJZf6Dm2pgjQ7lxthQFAHko13' },
  modifier: { type: Number, default: 1 },
  wins: { type: Number, default: 0 },
  losses: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});


module.exports = mongoose.model('Creature', creatureSchema);
