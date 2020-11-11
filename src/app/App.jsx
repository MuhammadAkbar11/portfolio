import React, { useReducer } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '@app/containers/Home';
import About from '@app/containers/About';
import { LayoutProvider, PublicProvider } from './context/context';
import PublicStore from './context/stores/public.store';
import PublicReducer from './context/reducers/public.reducer';
import LayoutReducer from './context/reducers/layout.reducer';
import LayoutStore from './context/stores/layout.store';

const App = () => {
  /* eslint-disable */
  const [store, dispatch] = useReducer(PublicReducer, PublicStore);
  const [layoutStore, layoutDispatch] = useReducer(LayoutReducer, LayoutStore);

  return (
    <>
      <PublicProvider
        value={{
          publicStore: store,
          publicDispatch: dispatch,
        }}
      >
        <LayoutProvider
          value={{
            layoutStore: layoutStore,
            layoutDispatch: layoutDispatch,
          }}
        >
          <Switch>
            <Route path='/' exact render={() => <Home />} />
            <Route path={'/about'} render={() => <About />} />
          </Switch>
        </LayoutProvider>
      </PublicProvider>
    </>
  );
};

export default App;
