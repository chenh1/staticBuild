import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/style.css';

const scrollToTop = () => window.scrollTo(0, 0);

render(
  <Router onUpdate={scrollToTop} history={browserHistory} routes={routes} />,
  document.getElementById('app')
);
