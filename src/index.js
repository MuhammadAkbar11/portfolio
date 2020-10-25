import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import './App/index.scss';

ReactDOM.render(<App />, document.querySelector('#root'));

if (module.hot) module.hot.accept();
