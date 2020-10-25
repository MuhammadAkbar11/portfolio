import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Wrapper from './components/layouts/Wrapper';
import About from './containers/About/About';
import Contacts from './containers/Contacts/Contacts';
import Home from './containers/Home/Home';
import Works from './containers/Works/Works';

const App = () => {
  const [showTextOverlay, setShowTextOverlay] = useState(false);
  const [titleOverlay, setTitleOverlay] = useState('');
  const [mainClass, setMainClass] = useState('pt-32');

  const handleShowTextOverlay = value => setShowTextOverlay(value);

  const handleTitleOverlay = value => setTitleOverlay(value);

  const handleMainClass = value => setMainClass(value);

  return (
    <Router>
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
    </Router>
  );
};

export default App;
