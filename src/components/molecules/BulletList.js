import React from 'react';

const BulletList = ({styleClass = "list-one", listItems}) => {
    return (
        <ul className={styleClass}>
            {listItems.map(listItem => 
                <li>{listItem}</li>
            )}
        </ul>
    );
};

export default BulletList