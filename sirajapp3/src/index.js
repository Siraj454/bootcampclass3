import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Tweet from './Tweet';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Tweet/>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();