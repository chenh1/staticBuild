import React from 'react';
import { SubHeader, Paragraph } from '../atoms';

const PortfolioInfo = ({subHeaderText, paragraphText}) => {
    return (
        <div className="info">
            <SubHeader text={subHeaderText}/>
            <Paragraph text={paragraphText}/>
        </div>
    )
};

export default PortfolioInfo;