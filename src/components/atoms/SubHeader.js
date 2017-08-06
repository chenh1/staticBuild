import React from 'react';

const SubHeader = ({customClass = "header-three", text}) => {
    return (
        <h3 className={customClass}>
            {text}
        </h3>
    )
};

export default SubHeader;