import React from 'react';
import { ImageContainer, PortfolioInfo } from '../molecules';
import { Link, IndexLink } from 'react-router';

const WorkItem = ({data}) => {
    return (
        <Link to={data.path} className="portfolio-item page-link">
            <ImageContainer customClass="image" imageSrc={data.imageSrc} alt={data.alt}/>
            <PortfolioInfo subHeaderText={data.subHeader} paragraphText={data.description}/>
        </Link>
    );
};

export default WorkItem;