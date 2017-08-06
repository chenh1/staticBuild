import React from 'react';
import Image from '../atoms/Image';

const ImageContainer = ({customClass, imageSrc, alt, caption}) => {
    return (
        <div className={customClass}>
            <Image imageSrc={imageSrc} alt={alt}/>
            {caption ? <span className="image-caption">{caption}</span> : ""}
        </div>
    )
};

export default ImageContainer;