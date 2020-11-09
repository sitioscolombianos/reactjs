import React from 'react';
import ReactDOM from 'react-dom';
import { AppRouter } from './routers/AppRouter'

import './assets/scss/index.scss';

ReactDOM.render(
  <AppRouter />,
  document.getElementById('home')
);
