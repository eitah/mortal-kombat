/* eslint-disable jsx-quotes, react/prop-types, console-log, max-len, no-underscore-dangle, no-console */

import React from 'react';

class HeroSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cls: 'open' };
  }

  // select(e) {
  //   const cls = this.state.cls === 'open' ? 'taken' : 'open';
  //
  //   const selectedHeroID = e.currentTarget.getAttribute('data-id');
  //
  //   this.setState({ cls, selectedHeroID });
  //
  //   // this.props.confirm;
  // }

  render() {

    let creatureTag = this.props.creatures.map((c, i) =>{console.log('id', i); return( <tr><td><div key={i} data-name={this.props.name} data-id={c._id} onClick={this.props.confirm} value={this.state.selectedHeroID} className={this.props.selectedCreature === c._id ? 'taken' : 'open'} ><img src={c.image} key={i} ref={c._id} height='150px' alt='' /><div>{c.name}</div></div></td></tr>)});
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
