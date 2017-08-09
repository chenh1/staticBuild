import React, {PropTypes} from 'react';

const SubHeader = ({customClass = "header-three", text}) => {
    return (
        <h3 className={customClass}>
            {text}
        </h3>
    );
};

SubHeader.propTypes = {
    customClass: PropTypes.string,
    text: PropTypes.string
};

export default SubHeader;