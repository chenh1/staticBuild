import React from 'react';
import { Link, IndexLink } from 'react-router';

const ListItem = ({text, path, linkClass, linkActiveClass}) => {
    return (
        <li>
            {path ? 
                <Link to={path} className={linkClass} activeClassName={linkActiveClass}>{text}</Link>
                :
                {text}
            }
        </li>
    );
};

export default ListItem;