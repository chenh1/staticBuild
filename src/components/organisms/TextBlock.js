import React from 'react';
import {Paragraph, SubHeader} from '../atoms';
import BulletList from '../molecules/BulletList';

const TextBlock = ({elements}) => {
    return (
        <div className="text-wrapper">
            {elements.map((element, index) => {
                switch (element.type) {
                    case 'paragraph':
                        return (
                            <Paragraph key={"text" + index} text={element.text}/>
                        );
                    case 'subHeader':
                        return (
                            <SubHeader key={"text" + index} customClass={element.customClass} text={element.text}/>
                        );
                    case 'bulletList':
                        return (
                            <BulletList key={"text" + index} listItems={element.listItems}/>
                        );
                    default:
                        return;
                }
            })}
        </div>
    );
};

export default TextBlock;