import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import Header from './Header';

test('renders header', () => {
    const tree = renderer.create(<Header
        headerClasses="mock-class"
        headerLogo="/mockLogoSrc"
        headerNavItems= {[
            {path: "/work", linkClass:"page-link", activeClassName:"active", text:"Work"},
            {path: "/about", linkClass:"page-link", activeClassName:"active", text:"About"},
            {path: '/mockResumeUrl', linkClass:"page-link", activeClassName:"active", text:"Resume"}
        ]} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
});