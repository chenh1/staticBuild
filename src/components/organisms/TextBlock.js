import React from 'react';

const TextBlock = ({elements}) => {
    return (
        <div className="text-wrapper">
            {elements.map(element => {
                switch (element.type) {
                    case 'paragraph':
                        <Paragraph />
                        break;
                    case 'subHeader':
                        <SubHeader />
                        break;
                    case 'bulletList':
                        <BulletList />
                        break;
                    default:
                        break;
                }
            })}
        </div>
    );
};

export default TextBlock;