/* eslint-disable jsx-quotes, react/prop-types, max-len, no-underscore-dangle, no-unused-vars, no-console */
import React from 'react';

class FightBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-xs-3'>
            <h1>Health: {this.props.hero.health}</h1>
            <h1>Fighter: {this.props.hero.name}</h1>
            <h1><img src={this.props.hero.image} alt='' height='150px' className='img img-reactive thumbnail' /></h1>
          </div>
          <div className='col-xs-3'>
            <h1>Weapon: {this.props.weapon.name}</h1>
            <h1><img src={this.props.weapon.image} alt='' height='150px' className='img img-reactive thumbnail' /></h1>
          </div>
        </div>
      </div>
    );
  }
}

export default FightBox;
