/* eslint-disable jsx-quotes, react/prop-types, max-len, no-underscore-dangle */
import React from 'react';
import HeroSelector from './HeroSelector';

class PreFightApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.refresh = this.refresh.bind(this);
  }
  componentDidMount() {
    this.refresh();
  }

  refresh() {

  }

  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-xs-6'>
            <HeroSelector ref='Hero1' name="Pick the first Hero" />
          </div>
          <div className='col-xs-6'>
            <HeroSelector ref='Hero2' name="Pick the second Hero" />
          </div>
        </div>
      </div>
    );
  }
}

export default PreFightApp;
