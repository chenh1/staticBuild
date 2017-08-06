import React from 'react';
import PortfolioImage from '../molecules/PortfolioImage';
import PortfolioInfo from '../molecules/PortfolioInfo';
import { Link, IndexLink } from 'react-router';

const WorkItem = ({data}) => {
    return (
        <Link to={data.path} className="portfolio-item page-link">
            <PortfolioImage imageSrc={data.imageSrc} alt={data.alt}/>
            <PortfolioInfo subHeaderText={data.subHeader} paragraphText={data.description}/>
        </Link>
    );
};

export default WorkItem;