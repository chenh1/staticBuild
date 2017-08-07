import React from 'react';

const BulletList = ({styleClass = "list-one", listItems}) => {
    return (
        <ul className={styleClass}>
            {listItems.map((listItem, index) => 
                <li key={"li" + index}>{listItem}</li>
            )}
        </ul>
    );
};

export default BulletList;