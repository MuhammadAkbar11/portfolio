import React, { useReducer, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Wrapper from './components/layouts/Wrapper';
import About from './containers/About/About';
import Contacts from './containers/Contacts/Contacts';
import Home from './containers/Home/Home';
import Works from './containers/Works/Works';

// context
import { AppProvider, LayoutProvider } from './context/context';
import AppReducer from './context/reducers/app.reducer';
import AppStore from './context/stores/app.store';
import LayoutReducer from './context/reducers/layout.reducer';
import LayoutStore from './context/stores/layout.store';

const App = () => {
  const [appStore, appDispatch] = useReducer(AppReducer, AppStore);
  const [layoutStore, layoutDispatch] = useReducer(LayoutReducer, LayoutStore);

  const [showTextOverlay, setShowTextOverlay] = useState(false);
  const [titleOverlay, setTitleOverlay] = useState('');
  const [mainClass, setMainClass] = useState('pt-32');

  const handleShowTextOverlay = value => setShowTextOverlay(value);

  const handleTitleOverlay = value => setTitleOverlay(value);

  const handleMainClass = value => setMainClass(value);

  return (
    <Router>
      <AppProvider
        value={{
          appStore,
          appDispatch,
        }}
      >
        <LayoutProvider
          value={{
            layoutStore,
            layoutDispatch,
          }}
        >
          <Wrapper
            mainClass={`relative z-5 ${mainClass} `}
            showTitleOverlay={showTextOverlay}
            titleOverlay={titleOverlay}
          >
            <Switch>
              <Route
                path='/'
                exact
                render={() => (
                  <Home
                    handleIsTextOverlay={handleShowTextOverlay}
                    handleTextOverlay={handleTitleOverlay}
                    handleMainClass={handleMainClass}
                  />
                )}
              />
              <Route
                path='/about'
                render={() => (
                  <About
                    handleIsTextOverlay={handleShowTextOverlay}
                    handleTextOverlay={handleTitleOverlay}
                  />
                )}
              />
              <Route
                path='/works'
                render={() => (
                  <Works
                    handleIsTextOverlay={handleShowTextOverlay}
                    handleTextOverlay={handleTitleOverlay}
                  />
                )}
              />
              <Route
                path='/contact'
                render={() => (
                  <Contacts
                    handleIsTextOverlay={handleShowTextOverlay}
                    handleTextOverlay={handleTitleOverlay}
                  />
                )}
              />
            </Switch>
          </Wrapper>
        </LayoutProvider>
      </AppProvider>
    </Router>
  );
};

export default App;
