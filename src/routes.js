import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import { HomePage, AboutPage, WorkPage, AmmaPage, DignityMealsPage, AbundantLifePage} from './components/ecosystems';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="work" component={WorkPage} />
    <Route path="about" component={AboutPage} />
    <Route path="amma" component={AmmaPage} />
    <Route path="dignity-meals" component={DignityMealsPage} />
    <Route path="abundant-life" component={AbundantLifePage} />
  </Route>
);
