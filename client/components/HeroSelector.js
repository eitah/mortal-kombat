/* eslint-disable jsx-quotes, react/prop-types, console-log, max-len, no-underscore-dangle */

import React from 'react';

class HeroSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    let creatureTag = this.props.creatures.map(c => <tr><td><img src={c.image} key={Math.random()} alt='' /><div>{c.name}</div></td></tr>);
    console.log('this: ', creatureTag);
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>
                <h1>{this.props.name}</h1>
              </th>
            </tr>
          </thead>
          <tbody>
            {creatureTag}
          </tbody>
        </table>
        <div>
        </div>
      </div>
    );
  }
}

export default HeroSelector;
