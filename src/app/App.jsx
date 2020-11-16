import React, { useEffect, useReducer } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '@app/containers/Home';
import About from '@app/containers/About';
import Works from '@app/containers/Works';
import { LayoutProvider, PublicProvider } from './context/context';
import PublicStore from './context/stores/public.store';
import PublicReducer from './context/reducers/public.reducer';
import LayoutReducer from './context/reducers/layout.reducer';
import LayoutStore from './context/stores/layout.store';

const App = () => {
  const [store, dispatch] = useReducer(PublicReducer, PublicStore);
  const [layoutStore, layoutDispatch] = useReducer(LayoutReducer, LayoutStore);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

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
            layoutStore,
            layoutDispatch,
          }}
        >
          <Switch>
            <Route path='/' exact render={() => <Home />} />
            <Route path='/about' render={() => <About />} />
            <Route path='/works' render={() => <Works />} />
          </Switch>
        </LayoutProvider>
      </PublicProvider>
    </>
  );
};

export default App;
