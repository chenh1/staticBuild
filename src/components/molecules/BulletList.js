import React from 'react';

const BulletList = ({styleClass, listItems}) => {
    return (
        <ul className={styleClass}>
            {listItems.map(listItem => {
                <ListItem />
            })}
        </ul>
    );
};

export default BulletList