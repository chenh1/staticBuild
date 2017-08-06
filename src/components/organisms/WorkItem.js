import React from 'react';
import PortfolioImage from '../molecules/PortfolioImage';
import PortfolioInfo from '../molecules/PortfolioInfo';

const WorkItem = ({data}) => {
    return (
        <div className="portfolio-item page-link">
            <PortfolioImage imageSrc={data.imageSrc} alt={data.alt}/>
            <PortfolioInfo subHeaderText={data.subHeader} paragraphText={data.description}/>
        </div>
    );
};

export default WorkItem;