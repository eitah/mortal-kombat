/* eslint-disable jsx-quotes, react/prop-types, max-len, no-underscore-dangle, no-unused-vars, no-console */
import React from 'react';
import HeroSelector from './HeroSelector';

class PreFightApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { creatures: [], weapons: [] };
    this.refresh = this.refresh.bind(this);
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

  render() {
    let hero1 = ''; let hero2 = '';
    if (this.state.creatures.length > 0) {
      console.log('hero wins!');
      hero1 = <HeroSelector ref='Hero1' name='Pick the First Hero' creatures={this.state.creatures} />;
      hero2 = "<HeroSelector ref='Hero2' name='Pick the Second Hero' creatures={this.state.creatures} />";
    }
    return (
      <div>
        <div className='row'>
          <div className='col-xs-6'>
            {hero1}
          </div>
          <div className='col-xs-6'>
            {hero2}
          </div>
        </div>
      </div>
    );
  }
}

export default PreFightApp;
