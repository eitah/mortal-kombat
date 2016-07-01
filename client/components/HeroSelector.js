/* eslint-disable jsx-quotes, react/prop-types, console-log, max-len, no-underscore-dangle, no-console */

import React from 'react';

class HeroSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cls: 'open' };
    this.select = this.select.bind(this);
  }

  select(e) {
    const cls = this.state.cls === 'open' ? 'taken' : 'open';

    const selectedHeroID = e.currentTarget.getAttribute('data-id');

    this.setState({ cls, selectedHeroID });
  }

  render() {
    let creatureTag = this.props.creatures.map(c => <tr><td><div data-id={c._id} onClick={this.select} className={this.state.selectedHeroID === c._id ? 'taken' : 'open'} ><img src={c.image} key={Math.random()} ref={c._id} height='150px' alt='' /><div>{c.name}</div></div></td></tr>);
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
          <button onClick={this.props.confirm} name={this.props.name} value={this.state.selectedHeroID} ref="btnConfirm" >Confirm</button>
        </div>
      </div>
    );
  }
}

export default HeroSelector;
