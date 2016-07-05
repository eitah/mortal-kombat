/* eslint-disable jsx-quotes, react/prop-types, console-log, max-len, no-underscore-dangle */

import React from 'react';

class WeaponSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cls: 'open' };
    // this.select = this.select.bind(this);
  }

  // select(e) {
  //   const cls = this.state.cls === 'open' ? 'taken' : 'open';
  //   console.log('after select');
  //
  //   const selectedWeaponID = e.currentTarget.getAttribute('data-id');
  //
  //   this.setState({ cls, selectedWeaponID });
  // }

  render() {
    let weaponTag = this.props.weapons.map((w, i) =>
      <tr>
        <td>
          <div
            data-name={this.props.name}
            key={i}
            data-id={w._id}
            onClick={this.props.confirm}
            className={this.props.selectedWeapon === w._id ? 'taken' : 'open'}
          >
            <img src={w.image} key={Math.random()} ref={w._id} height='150px' alt='' />
            <div>{w.name}</div>
          </div>
        </td>
      </tr>);
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
            {weaponTag}
          </tbody>
        </table>
        <div>
        </div>
      </div>
    );
  }
}

export default WeaponSelector;
