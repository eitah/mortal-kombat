import App from './components/App';
import NewCreature from './components/NewCreature';
import NewWeapon from './components/NewWeapon';
import PreFightApp from './components/PreFightApp';
import Home from './components/Home';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
require('es6-promise').polyfill();
require('isomorphic-fetch');

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="PreFightApp" component={PreFightApp} />
      <Route path="NewWeapon" component={NewWeapon} />
      <Route path="NewCreature" component={NewCreature} />
    </Route>
  </Router>
  , document.getElementById('root'));


// render(<App />, document.getElementById('root'));
