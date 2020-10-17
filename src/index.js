import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.scss';

ReactDOM.render(<App />, document.querySelector('#root'));

if (module.hot) module.hot.accept();
