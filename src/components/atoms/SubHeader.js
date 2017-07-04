import React from 'react';

const SubHeader = ({styleClass, text}) => {
    return (
        <h3 className={styleClass}>
            {text}
        </h3>
    )
};

export default SubHeader;