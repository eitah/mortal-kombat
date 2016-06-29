/* eslint-disable  react/prop-types, react/prefer-stateless-function */

import React from 'react';

import { Link } from 'react-router';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Mortal Kombat: Game of Thrones!</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/NewWeapon">New Weapon</Link></li>
          <li><Link to="/NewCreature">New Creature</Link></li>
          <li><Link to="/PreFightApp">Fight!!!!!</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}
