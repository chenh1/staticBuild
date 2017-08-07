import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import { BulletList } from '../molecules';

const Header = ({listItems}) => {
  return (
    <nav id="header" className="header">
      <IndexLink to="/" id="logo" className="logo" activeClassName="active">
        <img src={require("../../assets/logo.png")} alt="Tracy Lin Logo" />
        <h1 className="page-name">
          Tracy Lin
        </h1>
      </IndexLink>

      <BulletList
        styleClass="nav-menu"
        listItems={listItems}
      />
    </nav>
  );
}

export default Header;
