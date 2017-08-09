import React, {PropTypes} from 'react';
import { Image } from '../atoms';

const ImageContainer = ({customClass, imageSrc, alt, caption}) => {
    return (
        <div className={customClass}>
            <Image imageSrc={imageSrc} alt={alt}/>
            {caption ? <span className="image-caption">{caption}</span> : ""}
        </div>
    );
};

ImageContainer.propTypes = {
    customClass: PropTypes.string,
    imageSrc: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    caption: PropTypes.string
};

export default ImageContainer;