import React from 'react';
import {Link} from 'react-router';
import WorkNav from '../common/WorkNav.js';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <WorkNav />
      </div>
    );
  }
}

export default HomePage;
