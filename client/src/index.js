import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';

import { BrowserRouter,  } from 'react-router-dom';
import Routes from './routes';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<BrowserRouter>
  <Routes />
</BrowserRouter>
, document.getElementById('root'));


serviceWorker.unregister();
