import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import ListItem from './ListItem';

test('renders list item with link if path prop exists', () => {
    const tree = renderer.create(<ListItem
        text="Mock list item"
        path="/mockPath"
        linkClass="mock-class"
        linkActiveClass="mock-active-class" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
});

test('renders list item with text in span tag only if path does not exist', () => {
    const tree = renderer.create(<ListItem
        text="Mock list item" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
});