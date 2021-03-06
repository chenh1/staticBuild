import React, {PropTypes} from 'react';
import { ListItem } from '../atoms';

const BulletList = ({styleClass = "list-one", listItems}) => {    
    return (
        <ul className={styleClass}>
            {listItems.map((listItem, index) => 
                <ListItem 
                    key={"li" + index} 
                    text={listItem.text || listItem}
                    path={listItem.path}
                    linkClass={listItem.linkClass}
                    linkActiveClass={listItem.linkActiveClass}
                />
            )}
        </ul>
    );
};

BulletList.propTypes = {
    styleClass: PropTypes.string,
    listItems: PropTypes.array.isRequired
};

export default BulletList;