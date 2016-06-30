/* eslint-disable jsx-quotes, react/prop-types, max-len, no-underscore-dangle, no-unused-vars, no-console */
import React from 'react';
import HeroSelector from './HeroSelector';
import WeaponSelector from './WeaponSelector';
import FightBox from './FightBox';
import { Link } from 'react-router';
let hero1Object = '';
let hero2Object = '';
let weapon1Object = '';
let weapon2Object = '';

class PreFightApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { creatures: [], weapons: [] };
    this.refresh = this.refresh.bind(this);
    this.confirm = this.confirm.bind(this);
    this.fight = this.fight.bind(this);
  }
  componentDidMount() {
    this.refresh();
  }

  refresh() {
    fetch('/creature')
    .then(r => r.json())
    .then(j => {
      this.setState({ creatures: j.creatures });
    });
    fetch('/weapon')
    .then(r => r.json())
    .then(j => {
      this.setState({ weapons: j.weapons });
    });
    console.log('refresh has run', this.state.creatures, this.state.weapons);
  }

  confirm(event) {
    console.log('event current target :', event.currentTarget.name);
    if (event.currentTarget.name === 'Pick the First Hero') {
      const hero1Id = this.refs.Hero1.refs.btnConfirm.value;
      hero1Object = this.state.creatures.find(c => c._id === hero1Id);
      this.setState({ hero1Object });
    }
    if (event.currentTarget.name === 'Pick the Second Hero') {
      const hero2Id = this.refs.Hero2.refs.btnConfirm.value;
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
    let timer = 60;
    while (timer > 0 && hero1Object.health >= 0 && hero2Object.health >= 0) {
      timer -= 1;
    }
  }

  render() {
    let hero1 = ''; let hero2 = '';
    let weapon1 = ''; let weapon2 = '';
    let fightbox1 = ''; let fightbox2 = '';
    let fightButton = '';
    if (this.state.creatures.length > 0) {
      console.log('hero wins!');
      hero1 = <HeroSelector ref='Hero1' name='Pick the First Hero' creatures={this.state.creatures} confirm={this.confirm} />;
      hero2 = <HeroSelector ref='Hero2' name='Pick the Second Hero' creatures={this.state.creatures} confirm={this.confirm} />;
    }
    if (this.state.weapons.length > 0) {
      console.log('Weapons are found!');
      weapon1 = <WeaponSelector ref='Weapon1' name='Pick the First Heroes weapon' weapons={this.state.weapons} confirm={this.confirm} />;
      weapon2 = <WeaponSelector ref='Weapon2' name='Pick the Second Heroes weapon' weapons={this.state.weapons} confirm={this.confirm} />;
    }
    console.log('~~~~~state~~~~~~~~~~~~~~~~~~~', this.state);
    if (this.state.weapon2Object) {
      console.log('starting fight');
      fightbox1 = <FightBox ref='fighter1' hero={this.state.hero1Object} weapon={this.state.weapon1Object} />;
      fightbox2 = <FightBox ref='fighter2' hero={this.state.hero2Object} weapon={this.state.weapon2Object} />;
      fightButton = <button onClick={this.fight} name={this.props.name}>Fight!!!!</button>;
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
          </div>
        </div>
      </div>

    );
  }
}

export default PreFightApp;
