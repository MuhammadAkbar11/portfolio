import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '@app/containers/Home';

const App = () => {
  /* eslint-disable */

  return (
    <>
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
    </>
  );
};

export default App;
