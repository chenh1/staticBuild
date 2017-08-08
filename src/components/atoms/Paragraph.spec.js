import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import Paragraph from './Paragraph';

test('renders paragraph tag with text', () => {
    const tree = renderer.create(<Paragraph
        text={["Mock text"]}
        customClass="mock-class" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
});

test('renders paragraph tag with default paragraph-one class', () => {
    const tree = renderer.create(<Paragraph
        text={["Mock text"]} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
});

test('renders paragraph tag with embedded link if exists', () => {
    const tree = renderer.create(<Paragraph
        text={[
            "Mock text", 
            {embeddedLink: '/mockUrl', text:'text with embedded link'}, 
            "more mock text"
        ]}
        customClass="mock-class" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
});
