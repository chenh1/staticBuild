import React, {PropTypes} from 'react';
import { IndexLink } from 'react-router';

const LogoLink = ({id, styleClass, activeStyleClass}) => {
    return (
        <IndexLink to="/" id={id} className={styleClass} activeClassName={activeStyleClass}>
            <Image />
            <h1 className="page-name">Tracy Lin</h1>
        </IndexLink>
    );
};

LogoLink.propTypes = {
    id: PropTypes.string,
    styleClass: PropTypes.string,
    activeStyleClass: PropTypes.string
};

export default LogoLink;