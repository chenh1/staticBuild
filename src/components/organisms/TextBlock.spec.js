import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import TextBlock from './TextBlock';

test('renders text block which conditionally renders different component types', () => {
    const tree = renderer.create(<TextBlock
        elements={[
            {type: 'paragraph', text: ['Mock paragraph text', '...more text']},
            {type: 'subHeader', text: 'Mock subheader text'},
            {type: 'bulletList', listItems: ['list item 1', 'list item 2']}
        ]} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
});