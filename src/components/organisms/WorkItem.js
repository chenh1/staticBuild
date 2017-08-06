import React from 'react';
import ImageContainer from '../molecules/ImageContainer';
import PortfolioInfo from '../molecules/PortfolioInfo';
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