import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import Article from './Article';

test('renders overarching article block with images and texts', () => {
    const tree = renderer.create(<Article
        articleItems={[
            {type: 'image', customClass: 'mock-class', imageSrc: '/mockSrc', alt: 'mock alt', caption: 'Mock caption'},
            {type: 'text', content: [
                {type: 'paragraph', text: ['Mock paragraph text', '...more text']},
                {type: 'subHeader', text: 'Mock subheader text'},
                {type: 'bulletList', listItems: ['list item 1', 'list item 2']}
            ]}
        ]} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
});