import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import PortfolioInfo from './PortfolioInfo';

test('renders container for subheader and paragraph', () => {
    const tree = renderer.create(<PortfolioInfo
        subHeaderText="Mock sub-header text"
        paragraphText={["Mock paragraph text"]} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
});