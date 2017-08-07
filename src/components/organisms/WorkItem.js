import React from 'react';
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

export default WorkItem;