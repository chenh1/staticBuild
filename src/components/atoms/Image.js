import React from 'react';

const Image = ({imageSrc, alt}) => {
    return (
        <img src={imageSrc} alt={alt}/>
    );
};

export default Image;