/* eslint-disable func-names, no-unused-vars */

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const weaponSchema = new Schema({
  name: { type: String, required: true, default: 'Bomb' },
  attack: { type: Number, default: (Math.floor(Math.random() * 11)) },
  image: { type: String, default: 'http://401ak47.com/wp-content/uploads/2011/04/melee-weapon-pulaski-fire-axe.jpg' },
  createdAt: { type: Date, default: Date.now },
});


module.exports = mongoose.model('Weapon', weaponSchema);
