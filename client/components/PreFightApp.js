/* eslint-disable jsx-quotes, react/prop-types, max-len, no-underscore-dangle, no-unused-vars, no-console, no-param-reassign */
import React from 'react';
import HeroSelector from './HeroSelector';
import WeaponSelector from './WeaponSelector';
import FightBox from './FightBox';
import { Link } from 'react-router';
let hero1Object = { _id: '' };
let hero2Object = { _id: '' };
let weapon1Object = '';
let weapon2Object = '';
const maxTimer = 60;
let currentTime = maxTimer;
let count = 0;

class PreFightApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { creatures: [], weapons: [], timer: maxTimer, hero1Object, hero2Object };
    this.refresh = this.refresh.bind(this);
    this.confirm = this.confirm.bind(this);
    this.fight = this.fight.bind(this);
    this.attack = this.attack.bind(this);
  }

  componentDidMount() {
    this.refresh();
  }

  refresh() {
    fetch('/creatures')
    .then(r => r.json())
    .then(j => {
      this.setState({ creatures: j.creatures });
    });
    fetch('/weapons')
    .then(r => r.json())
    .then(j => {
      this.setState({ weapons: j.weapons });
    });
  }

  confirm(event) {
    if (event.currentTarget.getAttribute('data-name') === 'Pick the First Hero') {
      const hero1Id = event.currentTarget.getAttribute('data-id');
      hero1Object = this.state.creatures.find(c => c._id === hero1Id);
      this.setState({ hero1Object });
    }
    if (event.currentTarget.getAttribute('data-name') === 'Pick the Second Hero') {
      const hero2Id = event.currentTarget.getAttribute('data-id');
      hero2Object = this.state.creatures.find(c => c._id === hero2Id);
      this.setState({ hero2Object });
    }
    if (event.currentTarget.name === 'Pick the First Heroes weapon') {
      const weapon1Id = this.refs.Weapon1.refs.btnConfirm.value;
      console.log('weapon 1 entered', this.refs.Weapon1.refs.btnConfirm.value);
      weapon1Object = this.state.weapons.find(w => w._id === weapon1Id);
      this.setState({ weapon1Object });
    }
    if (event.currentTarget.name === 'Pick the Second Heroes weapon') {
      const weapon2Id = this.refs.Weapon2.refs.btnConfirm.value;
      weapon2Object = this.state.weapons.find(w => w._id === weapon2Id);
      this.setState({ weapon2Object });
      console.log('weapon 2 state is', this.state.weapon2Object);
    }

    // this.setState({ hero1Object, hero2Object, weapon1Object, weapon2Object });
  }


  fight() {
    console.log('~~~~~state~~~~~~~~~~~~~~~~~~~', this.state);
    console.log('inside the while loop time at start of round is:', this.state.timer);
    count = 0;
    this.inc = setInterval(() => {
      if ((this.state.timer > 0) && (hero1Object.health > 0 && hero2Object.health > 0)) {
        this.attack(hero1Object, weapon1Object, hero2Object);
        this.attack(hero2Object, weapon2Object, hero1Object);
        this.setState({ hero1Object, hero2Object });

        console.log('promise time is ', this.state.timer);
        currentTime = this.state.timer - 1;
        this.setState({ timer: currentTime });
      } else {
        clearInterval(this.inc);
      }


      // const promiseDamage = new Promise(() => {
      //  });
      // promiseDamage.then(() => this.setState({ hero1Object, hero2Object }));

      // const promiseTime = new Promise(
      //   (resolve, reject) => {
      //     console.log('promise time is ', this.state.timer);
      //     currentTime = this.state.timer - 1;
      //     resolve();
      //   });
      // promiseTime.then(
      //   () => {
      //     this.setState({ timer: currentTime });
      //     console.log('after promise time is ', this.state.timer);
      //   });
      // promiseTime.then(
      //   () => {
      //     if (this.state.timer <= 0) {
      //       clearInterval(this.inc);
      //       console.log('trying to start new round', this.inc);
      //     }
      //   });
      //
    }, 300);
    console.log('time remaining after fight is', this.state.timer);
  }


  attack(attacker, attackerWeapon, defender) {
    const resultAttack = Math.floor(Math.random() * attackerWeapon.attack);
    console.log(attacker.name, 'hits', defender.name, 'with', attackerWeapon.name, 'of max strength', attackerWeapon.attack, 'result is', resultAttack);
    const currentHealth = defender.health - resultAttack;
    defender.health = currentHealth;
  }

  render() {
    let hero1 = ''; let hero2 = '';
    let weapon1 = ''; let weapon2 = '';
    let fightbox1 = ''; let fightbox2 = '';
    let fightButton = ''; let timerDisplay = '';
    if (this.state.creatures.length > 0) {
      hero1 = <HeroSelector ref='Hero1' name='Pick the First Hero' creatures={this.state.creatures} selectedCreature={this.state.hero1Object._id} confirm={this.confirm} />;
      hero2 = <HeroSelector ref='Hero2' name='Pick the Second Hero' creatures={this.state.creatures} selectedCreature={this.state.hero2Object._id} confirm={this.confirm} />;
    }
    if (this.state.weapons.length > 0) {
      weapon1 = <WeaponSelector ref='Weapon1' name='Pick the First Heroes weapon' weapons={this.state.weapons} confirm={this.confirm} />;
      weapon2 = <WeaponSelector ref='Weapon2' name='Pick the Second Heroes weapon' weapons={this.state.weapons} confirm={this.confirm} />;
    }
    if (this.state.weapon2Object) {
      fightbox1 = <FightBox ref='fighter1' hero={this.state.hero1Object} weapon={this.state.weapon1Object} />;
      fightbox2 = <FightBox ref='fighter2' hero={this.state.hero2Object} weapon={this.state.weapon2Object} />;
      fightButton = <button onClick={this.fight} name={this.props.name}>Fight!!!!</button>;
      timerDisplay = <div ref='timer' value={this.state.timer}><h1>{this.state.timer}</h1></div>;
    }
    return (
      <div>
        <div className='row'>
          <div className='col-xs-6'>
            {hero1}
            {weapon1}
            {fightbox1}
          </div>
          <div className='col-xs-6'>
            {hero2}
            {weapon2}
            {fightbox2}
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-3'>
            {fightButton}
            {timerDisplay}
          </div>
        </div>
      </div>

    );
  }
}

export default PreFightApp;
