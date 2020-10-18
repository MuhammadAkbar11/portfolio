import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';

const App = () => {
  return (
    <Router>
      <Route path='/' exact component={Home} />
    </Router>
  );
};

export default App;
