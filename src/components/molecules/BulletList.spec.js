import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import BulletList from './BulletList';

test('renders BulletList with text', () => {
    const tree = renderer.create(<BulletList
        listItems={[
            'list item 1',
            'list item 2',
            'list item 3'
        ]}
        customClass="mock-class" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
});

test('renders BulletList with default list-one class', () => {
    const tree = renderer.create(<BulletList
        listItems={[
            'list item 1',
            'list item 2',
            'list item 3'
        ]} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
});