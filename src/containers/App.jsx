import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
      </Switch>
    </Router>
  );
};

export default App;
