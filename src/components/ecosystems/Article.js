import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import { TextBlock } from '../organisms';
import { ImageContainer } from '../molecules';

const Article = ({articleItems}) => {
    return (
        <div id="articleContent" className="standard-article">
            {articleItems.map((item, index) => {
                switch (item.type) {
                    case 'image':
                        return (
                            <ImageContainer 
                                key={"item" + index}
                                customClass={item.customClass}
                                imageSrc={item.imageSrc}
                                alt={item.alt}
                                caption={item.caption}
                            />
                        );
                    case 'text':
                        return (
                            <TextBlock 
                                key={"item" + index}
                                elements={item.content}
                            />
                        );
                    default:
                        return;
                }
            })}
        </div>
    );
};

Article.propTypes = {
    articleItems: PropTypes.array.isRequired
};

export default Article;