/* eslint-disable jsx-quotes, react/prop-types, max-len, no-underscore-dangle */

import React from 'react';

class HeroSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <table>
          <th>
            <h1>{this.props.name}</h1>
          </th>
          <tr>
            <td>
              <img src="http://www.fakingnews.firstpost.com/wp-content/uploads/2015/12/kim-jaya.jpg" alt='' />
              <div>fighter1</div>
            </td>
            <td>
              <img src="http://www.fakingnews.firstpost.com/wp-content/uploads/2015/12/kim-jaya.jpg" alt='' />
              <div>fighter2</div>
            </td>
            <td>
              <img src="http://www.fakingnews.firstpost.com/wp-content/uploads/2015/12/kim-jaya.jpg" alt='' />
              <div>fighter3</div>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default HeroSelector;
