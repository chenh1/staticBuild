import React, {PropTypes}  from 'react';
import { Link, IndexLink } from 'react-router';

const ListItem = ({text, path, linkClass, linkActiveClass}) => {
    return (
        <li>
            {path ? 
                <Link to={path} className={linkClass} activeClassName={linkActiveClass}>{text}</Link>
                :
                <span>{text}</span>
            }
        </li>
    );
};

ListItem.propTypes = {
    text: PropTypes.string.isRequired,
    path: PropTypes.string,
    linkClass: PropTypes.string,
    linkActiveClass: PropTypes.string
};

export default ListItem;