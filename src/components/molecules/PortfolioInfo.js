import React, {PropTypes} from 'react';
import { SubHeader, Paragraph } from '../atoms';

const PortfolioInfo = ({subHeaderText, paragraphText}) => {
    return (
        <div className="info">
            <SubHeader text={subHeaderText}/>
            <Paragraph text={paragraphText}/>
        </div>
    );
};

PortfolioInfo.propTypes = {
    subHeaderText: PropTypes.string.isRequired,
    paragraphText: PropTypes.string.isRequired
};

export default PortfolioInfo;