import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import WorkNav from './WorkNav';

test('renders WorkNav', () => {
    const tree = renderer.create(<WorkNav
        workItems={[
            {
                path: '/mockUrl', 
                customClass: 'mock-class', 
                imageSrc: '/mockSrc',
                alt: 'mock alt',
                subHeader: 'Mock sub-header text',
                description: ['Mock paragraph text']
            }
        ]} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
});