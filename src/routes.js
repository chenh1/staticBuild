import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/ecosystems/HomePage';
import AboutPage from './components/ecosystems/AboutPage';
import WorkPage from './components/ecosystems/WorkPage';
import AmmaPage from './components/ecosystems/AmmaPage';
import DignityMealsPage from './components/ecosystems/DignityMealsPage';
import AbundantLifePage from './components/ecosystems/AbundantLifePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="work" component={WorkPage} />
    <Route path="about" component={AboutPage} />
    <Route path="amma" component={AmmaPage} />
    <Route path="dignityMeals" component={DignityMealsPage} />
    <Route path="abundantLife" component={AbundantLifePage} />
  </Route>
);
