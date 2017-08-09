import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import ImageContainer from './ImageContainer';

test('renders image container', () => {
    const tree = renderer.create(<ImageContainer
        customClass="mock-class"
        imageSrc="/mockSrc"
        alt="Mock alt" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
});

test('renders image container with caption span tag if caption prop is available', () => {
    const tree = renderer.create(<ImageContainer
        customClass="mock-class"
        imageSrc="/mockSrc"
        alt="Mock alt"
        caption="Mock caption" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
});