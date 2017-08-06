import React from 'react';
import SubHeader from '../atoms/SubHeader';
import Paragraph from '../atoms/Paragraph';

const PortfolioInfo = ({subHeaderText, paragraphText}) => {
    return (
        <div className="info">
            <SubHeader text={subHeaderText}/>
            <Paragraph text={paragraphText}/>
        </div>
    )
};

export default PortfolioInfo;