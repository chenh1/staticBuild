import React, {PropTypes} from 'react';
import { ImageContainer, PortfolioInfo } from '../molecules';
import { Link, IndexLink } from 'react-router';

const WorkItem = ({path, customClass, imageSrc, alt, subHeader, description}) => {
    return (
        <Link to={path} className={customClass}>
            <ImageContainer customClass="image" imageSrc={imageSrc} alt={alt}/>
            <PortfolioInfo subHeaderText={subHeader} paragraphText={description}/>
        </Link>
    );
};

WorkItem.propTypes = {
    path: PropTypes.string.isRequired,
    customClass: PropTypes.string,
    imageSrc: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    subHeader: PropTypes.string.isRequired,
    description: PropTypes.array.isRequired
};

export default WorkItem;