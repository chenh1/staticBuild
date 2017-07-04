import React from 'react';

const Paragraph = ({styleClass, text}) => {
    return (
        <p className={styleClass}>
            {text}
        </p>
    );
};

export default Paragraph;