import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

/* HashRouter is easier to deploy. BrowserRouter requires more work */

import Home from './components/Home';
import Search from './components/Search';
import Profile from './components/Profile';

// NB: Not a component: just a varible with some JSX
const Routes = (
  <Router>
    <div>
      <Route exact path="/" component={ Home } />
      <Route exact path="/search" component={ Search } />
      <Route path="/details/:username" component={ Profile } />
    </div>
  </Router>
);

ReactDOM.render(Routes, document.body);
