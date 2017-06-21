import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const WorkItem = ({path, uniqueClass, imageSrc, details, description}) => {
    return(
        <Link to={path} className="{uniqueClass} portfolio-item page-link">
            <div className="image">
                <img src={imageSrc} alt={details}></img>
            </div>
            <div className="info">
                <h3 className="header-three">{details}</h3>
                <p className="paragraph-one">
                    {description}
                </p>
            </div>
        </Link>
    );
}

export default WorkItem;