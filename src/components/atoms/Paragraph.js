import React, {PropTypes} from 'react';

const Paragraph = ({customClass = "paragraph-one", text}) => {
    return (
        <p className={customClass}>
            {text.map((textItem, index) => 
                textItem.embeddedLink ? 
                    <a key={"embeddedLink" + index}
                        href={textItem.embeddedLink} 
                        data-link-type="externalLink" 
                        className="article-link page-link">
                        {textItem.text}
                    </a>
                    :
                    textItem
            )}
        </p>
    );
};

Paragraph.propTypes = {
    customClass: PropTypes.string,
    text: PropTypes.array
};

export default Paragraph;