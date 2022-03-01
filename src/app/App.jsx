import React, { useEffect, useReducer } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import Home from '@app/containers/Home';
import About from '@app/containers/About';
import Works from '@app/containers/Works';
import { AnimatePresence } from 'framer-motion';
import { LayoutProvider, PublicProvider } from './context/context';
import PublicStore from './context/stores/public.store';
import PublicReducer from './context/reducers/public.reducer';
import LayoutReducer from './context/reducers/layout.reducer';
import LayoutStore from './context/stores/layout.store';

const App = () => {
  const [store, dispatch] = useReducer(PublicReducer, PublicStore);
  const [layoutStore, layoutDispatch] = useReducer(LayoutReducer, LayoutStore);

  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      layoutDispatch({
        type: 'TOGGLE_LOADER',
        payload: false,
      });
    }, 2700);
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
          <AnimatePresence initial={false} exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route path='/about' render={() => <About />} />
              <Route path='/works' render={() => <Works />} />
              <Route path='/' exact render={() => <Home />} />
            </Switch>
          </AnimatePresence>
        </LayoutProvider>
      </PublicProvider>
    </>
  );
};

export default App;
