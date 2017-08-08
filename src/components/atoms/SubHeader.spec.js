import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import SubHeader from './SubHeader';

test('renders h3 tag with text', () => {
    const tree = renderer.create(<SubHeader
        text="Mock text"
        customClass="mock-class" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
});

test('renders h3 tag with default header-three class', () => {
    const tree = renderer.create(<SubHeader
        text="Mock text" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
});