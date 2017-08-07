import React from 'react';
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

export default ListItem;