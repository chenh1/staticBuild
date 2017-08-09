import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import Image from './Image';

test('renders img tag with correct attributes', () => {
    const tree = renderer.create(<Image
        src="/mockSrc"
        alt="Mock Image" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
});
