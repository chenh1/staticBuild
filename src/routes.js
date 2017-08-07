import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
//import WorkPage from './components/work/WorkPage';
import AmmaPage from './components/ecosystems/AmmaPage';
import DignityMealsPage from './components/ecosystems/DignityMealsPage';
import AbundantLifePage from './components/abundantLife/AbundantLifePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="amma" component={AmmaPage} />
    <Route path="dignityMeals" component={DignityMealsPage} />
    <Route path="abundantLife" component={AbundantLifePage} />
  </Route>
);
