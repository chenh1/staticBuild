import React from 'react';

const Paragraph = ({text}) => {
    return (
        <p className="paragraph-one">
            {text.map(textItem => {
                if (textItem.embeddedLink) {
                    return (
                        <a href={textItem.embeddedLink} data-link-type="externalLink" className="article-link page-link">{textItem.text}</a>
                    );
                } else {
                    return textItem;
                }
            })}
        </p>
    );
};

export default Paragraph;