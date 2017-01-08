import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

class Header extends React.Component {
  render(){
    return (
      <nav id="header" className="header">
        <IndexLink to="/" id="logo" className="logo" activeClassName="active">
          <img src="../assets/logo.png" alt="Tracy Lin Logo" />
          <h1 className="page-name">
            Tracy Lin
          </h1>
        </IndexLink>
        
        <ul className="nav-menu">
          <li><Link to="/work" className="page-link" activeClassName="active">Work</Link></li>
          <li><Link to="/about" className="page-link" activeClassName="active">About</Link></li>
          <li><a href="/resume.pdf" className="page-link" activeClassName="active">Resume</a></li>
        </ul>
      </nav>
    );
  }
}

export default Header;
