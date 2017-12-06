import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './App';
import Album from './views/album';
import Home from './views/home';

import './styles/css/index.css';

ReactDOM.render((
  <BrowserRouter>
    <App>
      <Route exact={true} path="/" component={Home} />
      <Route path="/album" component={Album} />
    </App>
  </BrowserRouter>
), document.getElementById('root'))

registerServiceWorker();
