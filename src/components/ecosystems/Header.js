import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import { BulletList } from '../molecules';

const Header = ({headerLogo, headerClasses, headerNavItems}) => {
  return (
    <nav id="header" className={headerClasses}>
      <IndexLink to="/" id="logo" className="logo" activeClassName="active">
        <img src={headerLogo} alt="Tracy Lin Logo" />
        <h1 className="page-name">
          Tracy Lin
        </h1>
      </IndexLink>

      <BulletList
        styleClass="nav-menu"
        listItems={headerNavItems}
      />
    </nav>
  );
};

Header.propTypes = {
  headerLogo: PropTypes.string.isRequired,
  headerClasses: PropTypes.string,
  headerNavItems: PropTypes.array.isRequired
};

export default Header;
