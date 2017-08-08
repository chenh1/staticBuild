import React, {PropTypes} from 'react';

const Image = ({imageSrc, alt}) => {
    return (
        <img src={imageSrc} alt={alt}/>
    );
};

Image.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
};

export default Image;