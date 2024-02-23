// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NicReg from './NicRegistration';
import RouteComponent from './RouteComponent';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          {/* <Route exact path="/" component={NicComponent} /> */}
          <Route path="/NicReg" component={NicReg} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
