import React from 'react';
import Image from '../atoms/Image';

const PortfolioImage = ({imageSrc, alt}) => {
    return (
        <div className="image">
            <Image imageSrc={imageSrc} alt={alt}/>
        </div>
    )
};

export default PortfolioImage;