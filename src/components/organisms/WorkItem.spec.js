import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import WorkItem from './WorkItem';

test('renders portfolio item with image and portfolio info components', () => {
    const tree = renderer.create(<WorkItem
        path="/mockUrl"
        customClass="mock-class"
        imageSrc="/mockSrc"
        alt="Mock alt tag"
        subHeader="Mock Portfolio Item"
        description={["Some mock description"]} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
});